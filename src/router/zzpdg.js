import Shop from '@/components/shop'
import Prodetial from '@/components/prodetial'
import Procpxq from '@/components/procpxq'
import Profjsm from '@/components/profjsm'
import Propl from '@/components/propl'
import Teatree from '@/components/teatree'

export default [
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/prodetial',
    name: 'prodetial',
    component: Prodetial,
    redirect: "/procpxq",
    children: [
      {
        path: '/procpxq',
        name: 'procpxq',
        component:  Procpxq,
      },
      {
        path: '/profjsm',
        name: 'profjsm',
        component:  Profjsm,
      },
      {
        path: '/propl',
        name: 'propl',
        component:  Propl,
      }
    ]
  },
  {
    path: '/teatree',
    name: 'teatree',
    component: Teatree
  }
]
