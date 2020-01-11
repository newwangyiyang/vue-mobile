import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import createLoadingPlugin from '@/utils/vuex-loading';

Vue.use(Vuex)

// 获取modules目录下所有的module(文件名即key值)
const files = require.context('./modules', false, /\.js$/)
const modules = {}
files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default new Vuex.Store({
  plugins: [createLoadingPlugin()],
  modules,
  getters,
})