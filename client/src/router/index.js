import Vue from 'vue'
import Router from 'vue-router'

import DashboardPage from '@/components/DashboardPage'
import ChatPage from '@/components/ChatPage'
import ChatJoin from '@/components/ChatJoin'
import UserLogin from '@/components/UserLogin'
import UserRegister from '@/components/UserRegister'
import UserForgotResetPassword from '@/components/UserForgotResetPassword'
import UserChangePassword from '@/components/UserChangePassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ChatPage
    },
    {
      path: '/chat',
      component: ChatPage,
      children: [
        {
          path: 'u',
          component: ChatJoin
        },
        {
          path: 'posts',
          component: UserChangePassword
        }
      ]
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
      path: '/reset-password',
      name: 'UserForgotResetPassword',
      component: UserForgotResetPassword
    },
    {
      path: '/change-password',
      name: 'UserChangePassword',
      component: UserChangePassword
    }
  ]
})
