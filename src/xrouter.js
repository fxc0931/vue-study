import Vue from 'vue'

import Home from './views/Home'
import About from './views/About'

class VueRouter {

    constructor(options) {
        this.$options = options
        this.routeMap = {}
        // 路由响应式
        this.app = new Vue({
            data: {
                current: '/'
            }
        })

    }

    init() {
        this.bindEvents() // 监听url的变化
        this.createRouteMap(this.$options) // 解析路由配置
        this.initComponent() // 实现两个组件
    }
    bindEvents() {
        window.addEventListener('load', this.onHashChange.bind(this))
        window.addEventListener('hashchange', this.onHashChange.bind(this))
    }
    onHashChange() {
        this.app.current = window.location.hash.slice(1) || '/'
    }
    createRouteMap(options) {
        options.routes.forEach(item => {
            this.routeMap[item.path] = item.component
        })
    }
    initComponent() {
        // router-link 
        // <router-link to="">go</router-link
        Vue.component('router-link', {
            props: { to: String },
            render(h) {
                // h(tag, data, children)
                return h('a', { attrs: { href: '#' + this.to } }, [this.$slots.default])
            }
        })
        // router-view
        // <router-view></router-view>
        Vue.component('router-view', {
            render: (h) => {
                const comp = this.routeMap[this.app.current]
                return h(comp)
            }
        })
    }
}
VueRouter.install = function (Vue) {
    // 混入
    Vue.mixin({
        beforeCreate() {
            // this是Vue的实例 
            if (this.$options.router) {
                // 仅在根组件执行一次
                Vue.prototype.$router = this.$options.router
                this.$options.router.init()
            }
        }
    })
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]
const router = new VueRouter({
    routes
})

export default router
