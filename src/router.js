import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './components/Welcome.vue'
import Dragon from './components/Dragon.vue'
import Lake from './components/Lake.vue'
import Maze from './components/Maze.vue'

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
    {
        path: '/maze',
        name: 'maze',
        component: Maze
    },
]


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router