import Vue from 'vue';
import Vuex from 'vuex';
import store from './store/index';

import App from './App.vue';

Vue.use(Vuex);

const app = new Vue({
    store,
    components: {
        App
    },
    render(h) {
        return h('App');
    }
});

//uncomment the next line
app.$mount('.app');

Vue.config.devtools = true;