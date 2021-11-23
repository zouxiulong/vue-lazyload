import Vue from 'vue'
import App from './App'
import lazy from './directive/lazyload/index'
const loading = require("./assets/loading3.gif")

Vue.use(lazy, {
    error: 'https://img.cmvideo.cn/publish/noms/2021/11/15/1O33E6QCJE8IV.gif',
    loading: loading,
    preload: 1.3
})

new Vue({
    el: '#root',
    render: h => h(App)
})