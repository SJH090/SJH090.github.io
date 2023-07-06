import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            redirect:'/home'
        },
        {
            path: '/home',
            component: () => import('../components/button.vue')
            // meta: {
            //     title: '首页'
            // }
        },
        {
            path: '/login',
            component: () => import('../components/404.vue')
        },
        {
            path: '/:path',
            component: () => import('../components/404.vue')
        }
    ]
})