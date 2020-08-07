import Vue from 'vue'
import VueRouter from 'vue-router'
import MyVuex from './state.js'


Vue.use(MyVuex)
Vue.use(VueRouter)

const Foo = { template: "<div>foo</div>"}
const Bar = { template: "<div>bar</div>"}
const IndexPage = { template: "<div>index</div>"}

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/', component: IndexPage },
]

const router = new VueRouter({
    routes
})

Vue.component('hello-world', {
    template: '<div>hello world</div>',
})

const app = new Vue({
    router,
    el: '#app',
    created: function() {
        this.$store.set('message', 'hello world vuex')
    },
    store: {
        message: "hello world"
    }
});
