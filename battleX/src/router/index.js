import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BattleX from '@/components/BattleX'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
    ,
    {
      path: '/jeu',
      name: 'BattleX',
      component: app
    }
  ]
})
