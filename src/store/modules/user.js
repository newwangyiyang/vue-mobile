import {
    USER_UPDATE_STATE,
    USER_OUT_LOGIN
} from '../mutation-types';

import {
    getUesrStateByIdAsync,
    getUesrStateByTokenAsync
} from '../action-types';

import {
    getUser,
    getUserByToken
} from '../../api/user';

import s from 'store2';

const state = {
    username: '',
    age: 0,
    sex: -1,
    token: ''
};

export default {
    namespaced: true,
    state,
    mutations: {
        [USER_UPDATE_STATE](state, user) {
            Object.keys(state).forEach(key => {
                state[key] = user[0][key];
            })
            s('token', state.token);
        },
        [USER_OUT_LOGIN](hasState) {
            Object.keys(hasState).forEach(key => {
                hasState[key] = state[key];
            });
            s(false);
        }
    },
    actions: {
        async [getUesrStateByIdAsync]({
            dispatch,
            commit,
            state
        }, userId) {
            const res = await getUser(userId);
            commit(USER_UPDATE_STATE, res);
        },
        async [getUesrStateByTokenAsync]({
            commit
        }, token) {
            const res = await getUserByToken(token);
            commit(USER_UPDATE_STATE, res);
        }
    }
}