import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Strats from '../views/Strats.vue'
import KBase from '../views/KBase.vue'
import Wallet from '../views/Wallet.vue'
import StratStart from "../components/StratStart"
import StratGas from '../components/StratGas'
import StratEnd from '../components/StratEnd'
import StratBeginner from '../components/StratBeginner'
import StratWool from '../components/StratWool'
import StratSugar from '../components/StratSugar'
import StratWine from '../components/StratWine'
import StratBlueSteel from '../components/StratBlueSteel'
import StratUniforms from "../components/StratUniforms"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/strats',
    name: 'Strategies',
    component: Strats
  },
  {
    path: '/kbase',
    name: 'Knowledge Base',
    component: KBase
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet
  },
  {
    path: '/strats/startup',
    name: 'Startup',
    component: StratStart
  },
  {
    path: '/strats/gas',
    name: 'Gas',
    component: StratGas
  },
  {
    path: '/strats/endgame',
    name: 'Endgame',
    component: StratEnd
  },
  {
    path: '/strats/beginner',
    name: 'Beginner',
    component: StratBeginner
  },
  {
    path: '/strats/woolrush',
    name: 'Wool Rush',
    component: StratWool
  },
  {
    path: '/strats/sugarrush',
    name: 'Sugar Rush',
    component: StratSugar
  },
  {
    path: '/strats/wine',
    name: 'Wine Strategy',
    component: StratWine
  },
  {
    path: '/strats/bluesteel',
    name: 'Blue Steel Strategy',
    component: StratBlueSteel
  },
  {
    path: '/strats/uniforms',
    name: 'Uniforms Strategy',
    component: StratUniforms
  }
]

const router = new VueRouter({
  routes
})

export default router
