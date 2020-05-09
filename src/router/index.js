import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/dashboard.vue'
import projects from '../views/projects.vue'
import team from '../views/team.vue'

Vue.use(VueRouter)


  const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path:'/team',
    name: 'team',
    component: team
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
