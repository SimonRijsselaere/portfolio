import Vue from 'vue';
import Router from 'vue-router'
import Home from './components/Home/Home.vue'
import Skills from './components/Skills.vue'
import About from './components/About.vue'
import BenderQuote from './components/BenderQuoteGenerator/BenderQuote.vue'
import Pagenotfound from './components/PageNotFound/Pagenotfound.vue'
import StarWars from './components/StarWars/StarWars.vue'
import Pokedex from './components/Pokedex/Pokedex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'home',
    component: Home
  },
  {
  path: '/skills',
  name: 'skills',
  component: Skills
},
  {
    path: '/404',
    name: '404',
    component: Pagenotfound
  },
    {
      path: '/bender',
      name: 'bender',
      component: BenderQuote
    },
      {
        path: '/starwars',
        name: 'starwars',
        component: StarWars
      },
      {
      path: '/about',
      name: 'about',
      component: About
    },
      {
      path: '/pokedex',
      name: 'pokedex',
      component: Pokedex
    },
 ]
})
