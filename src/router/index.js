import Vue from 'vue'
import Router from 'vue-router'
import sdlindex from './sdlindex'
import zzpdg from './zzpdg'
import gypro from './gypro'

Vue.use(Router);

export default new Router({
  routes:[
    ...sdlindex,
    ...zzpdg,
    ...gypro
  ]
})
