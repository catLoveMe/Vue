import Vue from 'vue'
import Vuex from 'vuex'

import prodetailname from './modules/prodetailname'
import cart from './modules/cart'
import order from './modules/order'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    order,
    prodetailname
  }
})
