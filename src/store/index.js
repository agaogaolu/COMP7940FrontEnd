import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

// 创建一个新的 store 实例
const store = new Vuex.Store({
    state() {
        return {

        }
    },
    mutations: {
    },
    actions: {},
    getters: {
        userInfo (state) {
            return state.user.userInfo
        }

    },
    modules: {
        user
    }
})
export default store