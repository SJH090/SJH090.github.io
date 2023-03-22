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
            component: () => import('../components/home.vue')
        },
        {
            path: '/20230321',
            component: () => import('../components/20230321.vue')
        }
    ]
})