import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Strats from '../views/Strats.vue'
import KBase from '../views/KBase.vue'
import Wallet from '../views/Wallet.vue'
import StratStart from "../components/Strat/StratStart"
import StratGas from '../components/Strat/StratGas'
import StratEnd from '../components/Strat/StratEnd'
import StratBeginner from '../components/Strat/StratBeginner'
import StratWool from '../components/Strat/StratWool'
import StratSugar from '../components/Strat/StratSugar'
import StratWine from '../components/Strat/StratWine'
import StratBlueSteel from '../components/Strat/StratBlueSteel'
import StratUniforms from "../components/Strat/StratUniforms"
import KbaseBuildings from "../components/KbaseBuildings"

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
  },
  {
    path: '/kbase/buildings',
    name: 'Buildings',
    component: KbaseBuildings
  }
]

const router = new VueRouter({
  routes
})

export default router
