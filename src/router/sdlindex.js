/**
 * Created by SDL on 2017/12/14 0014.
 */
// import  from '@/components/register'
import index from '@/components/index.vue'
import healthydrinktea from '@/components/healthydrinktea.vue'
import teaAdopt from '@/components/teaAdopt.vue'
import pack from '@/components/pack/pack.vue'
import newtea from '@/components/new tea/content.vue'
import teayouyuan from '@/components/teayouyuan.vue'
import about from '@/components/about/about.vue'
import teaPromote from '@/components/promote/teaPromote.vue'
import proDetil from '@/components/proDetil/proDetil.vue'
import pay from '@/components/pay.vue'

export default
[
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path:'/healthydrinktea',
    name:'healthydrinktea',
    component:healthydrinktea
  },
  {
    path:'/teaAdopt',
    name:'teaAdopt',
    component:teaAdopt
  },
  {
    path:'/pack',
    name:'pack',
    component:pack
  },
  {
    path:'/newtea',
    name:'newtea',
    component:newtea
  },
  {
    path:'/teayouyuan',
    name:'teayouyuan',
    component:teayouyuan
  },
  {
    path:'/about',
    name:'about',
    component:about
  },
  {
    path:'/teaPromote',
    name:'teaPromote',
    component:teaPromote,
  },
  {
    path: '/proDetil',
    name: 'proDetil',
    component:  proDetil,
  },
  {
    path: '/pay',
    name: 'pay',
    component:  pay,
  }
]
