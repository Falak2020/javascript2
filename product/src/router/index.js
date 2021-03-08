import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import addnewproduct from '../views/addnewproduct.vue'
import login from '../views/login.vue'
import postdetail from '../views/postdetail.vue'
import notFound from '../views/notFound.vue'
import register from '../views/register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component:login
  },
  {
    path:'/register',
    name:'register',
    component:register,
    
  },
  {
    path:'/:id',
    name:'postdetail',
    component:postdetail,
    props:true
  },
  {
    path:'/:token',
    name:'addnewproduct',
    component:addnewproduct,
    props:true
  },
  //redirecting
  {
    path:'/all-product',
    redirect:'/'
  },

  {
    path:'/:catchAll(.*)',
    name:'notFound',
    component:notFound

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
