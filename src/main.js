import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueScrollProgress from "vue-scroll-progress"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});

createApp(App).use(router).use(VueScrollProgress).use(ElementPlus).mount('#app');