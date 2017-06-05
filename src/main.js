import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import routes from './router.config'
import App from './App.vue'
import store from './store/index'

import Loading from './components/loading/index.js'
import filters from './filters/index'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

//css
import './assets/css/base.css'
//把axios挂载到vue的原型上
Vue.prototype.$http = axios
axios.interceptors.request.use(function(config) {
    store.dispatch('showLoading');
    return config;
}, function(err) {
    return Promise.reject(err);
})
axios.interceptors.response.use(function(response) {
        store.dispatch('hideLoading')
        return response
    }, function(err) {
        return Promise.reject(err)
    })
    //加载自定义的Loading组件
Vue.use(Loading);
//路由项
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
})
new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})