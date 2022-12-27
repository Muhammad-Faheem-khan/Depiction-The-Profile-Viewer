import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import HomePage from './components/HomePage'


Vue.use(VueRouter)

const routes = [
    { name: 'login', path: '/', component: LoginPage },
    { name: 'signUp', path: '/signup', component: SignUpPage },
    {
      name: 'home', path: '/home', component: HomePage, beforeEnter: (to, from, next) => {
        if (!sessionStorage.getItem('token')) next({ name: 'login' })
        else {
          next()
        }
      }
    }
  ]
  
  export const router = new VueRouter({
    mode: 'history',
    routes,
  })