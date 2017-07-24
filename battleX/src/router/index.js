import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Battlex from '@/components/battlex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      history: true,
    }
    ,
    {
      path: '/jeu',
      name: 'BattleX',
      component: Battlex
    }
  ]
})
