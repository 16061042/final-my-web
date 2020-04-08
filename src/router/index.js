import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: [{
        path: '/index',
        name: 'index',
        component: (resolve) => require(['@/content/index'], resolve)
    },{
        path: '/',
        redirect: 'index'
    }]
})
export default router