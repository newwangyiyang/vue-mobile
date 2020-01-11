import axios from 'axios'
import {
    Toast
} from 'vant'
import store from '@/store'

// create an axios instance
const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 5000 // request timeout
    // withCredentials: true, // send cookies when cross-domain requests
})

// 防止重复请求
let pending = [];
const CancelToken = axios.CancelToken;
const removePending = (config) => {
    // eslint-disable-next-line guard-for-in
    for (let [index, item] of pending.entries()) {
        // 当前请求在数组中存在时执行函数体
        if (item.url === config.url + '&request_type=' + config.method) {
            // 执行取消操作
            item.cancel()
            // 从数组中移除记录
            pending.splice(index, 1)
        }
    }
}


// request interceptor
request.interceptors.request.use(
    config => {
        // do something before request is sent
        if (store.getters.token) {
            // config.headers['X-Token'] = getToken()
        }

        removePending(config)
        config.cancelToken = new CancelToken((c) => {
            pending.push({
                url: config.url + '&request_type=' + config.method,
                cancel: c
            })
        })

        return config
    },
    error => {
        // do something with request error
        console.log(error, 'err') // for debug
        return Promise.reject(error)
    }
)

// response interceptor
request.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        removePending(response.config)
        const res = response.data
        return res;
        // if the custom code is not 20000, it is judged as an error.
        // if (res.code !== 200) {
        //     // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //         // to re-login
        //         Toast.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        //             confirmButtonText: 'Re-Login',
        //             cancelButtonText: 'Cancel',
        //             type: 'warning'
        //         }).then(() => {
        //             store.dispatch('user/resetToken').then(() => {
        //                 location.reload()
        //             })
        //         })
        //     }
        //     return Promise.reject(new Error(res.message || 'Error'))
        // } else {
        //     return res
        // }
    },
    error => {
        console.log('err' + error) // for debug
        Toast.fail({
            message: error.message,
            duration: 1.5 * 1000
        })
        return Promise.reject(error)
    }
)

export default request