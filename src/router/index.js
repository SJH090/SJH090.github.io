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
            path: '/console',
            component: () => import('../components/Console.vue')
        },
        {
            path: '/:path',
            component: () => import('../components/404.vue')
        }
    ]
})