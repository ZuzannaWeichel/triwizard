import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './components/Welcome.vue'
import Dragon from './components/Dragon.vue'
import Lake from './components/Lake.vue'


Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/dragon',
        name: 'dragon',
        component: Dragon
    },
    {
        path: '/lake',
        name: 'lake',
        component: Lake
    },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router