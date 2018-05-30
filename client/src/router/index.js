import Vue from 'vue'
import Router from 'vue-router'

import DashboardPage from '@/components/DashboardPage'
import UserLogin from '@/components/UserLogin'
import UserRegister from '@/components/UserRegister'
import UserForgotPasswordReset from '@/components/UserForgotPasswordReset'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: UserLogin
    },
    {
      path: '/dashboard',
      name: 'DashboardPage',
      component: DashboardPage
    },
    {
      path: '/login',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/register',
      name: 'UserRegister',
      component: UserRegister
    },
    {
      path: '/password-reset',
      name: 'UserForgotPasswordReset',
      component: UserForgotPasswordReset
    }
  ]
})
