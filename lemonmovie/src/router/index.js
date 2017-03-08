import Vue from 'vue'
import Router from 'vue-router'
import movie from 'components/movie/movie'
import discovery from 'components/discovery/discovery'
import user from 'components/user/user'

Vue.use(Router)

const routes = [
  { path: '/movie', component: movie },
  { path: '/discovery', component: discovery },
  { path: '/user', component: user }
]

export default new Router({
  routes
})
