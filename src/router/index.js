import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details'
import Search from '../views/Search'
const routes = [
  {
    path: '/',
    name: 'Home', 
    component: Home
  },
  {
    path:'/details/:id',
    name:'Details',
    component:Details,
    props:true
  },
  {
    path:'/search',
    name:'Search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
  
export default router
