import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

//第一步生成路由器
const router = new VueRouter({
    routes
})
//第二步安装路由器,先暴漏  main.js中全局挂载使用
export default router