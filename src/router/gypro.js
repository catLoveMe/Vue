import personself from '@/components/person/personself'
import cartShop from '@/components/cart/cartshop1'
import orderMess from '@/components/person/orderMess'
import person from '@/components/person/person.vue'
import doyoulike from '@/components/person/doyouLike'
import myWatch  from '@/components/person/myWatch'
import nearView from '@/components/person/nearView'
// import pro from '@/components/cart/pro'
import pro from '@/components/shop'
import address from '@/components/address/teaAddress'
import collection from '@/components/collect/teaCollect'
import pay from '@/components/pay'
import paynow from '@/components/payNow'

export default [
  {
    path: '/pro',
    name: 'pro',
    component: pro,
  },
  {
    path: '/person',
    name: 'person',
    component: person,
    redirect:'/personself',
    children:[
      {
        path: '/personself',
        name: 'personself',
        component: personself,
      },{
        path: '/cartShop',
        name: 'cartShop',
        component: cartShop,
        redirect:'/doyoulike',
        children:[
          {
            path: '/doyoulike',
            name: 'doyoulike',
            component: doyoulike
          },
          {
            path: '/myWatch',
            name: 'myWatch',
            component: myWatch
          },
          {
            path: '/nearView',
            name: 'nearView',
            component: nearView
          }
        ]
      },
      {
        path: '/orderMess',
        name: 'orderMess',
        component: orderMess
      },
      {
        path: '/address',
        name: 'address',
        component: address
      },
      {
        path: '/collection',
        name: 'collection',
        component: collection
      }
      ]
  },
  {
    path: '/pay',
    name: 'pay',
    component: pay
  },
  {
    path: '/paynow',
    name: 'paynow',
    component: paynow
  }
]
