const LoadingComp = require('./Loading.vue')
const loading = {
    install: function(Vue) {
        Vue.component('loading', LoadingComp)
    }
}
module.exports = loading