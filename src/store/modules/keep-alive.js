import {
    KEEPALIVE_UPDATE_DIRECTION
} from '../mutation-types';
export default {
    namespaced: true,
    state: {
        direction: 'forward', // forward | back
    },
    mutations: {
        [KEEPALIVE_UPDATE_DIRECTION](state, direction) {
            state.direction = direction;
        }
    }
};