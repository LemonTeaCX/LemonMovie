import Vue from 'vue'
import Router from 'vue-router'
import movie from 'components/movie/movie'
import discovery from 'components/discovery/discovery'
import user from 'components/user/user'
import hot from 'components/movie/hot'
import wait from 'components/movie/wait'
import find from 'components/movie/find'

Vue.use(Router)

const routes = [
  {
    path: '/movie',
    component: movie,
    name: 'movie',
    children: [
      { path: 'hot', component: hot },
      { path: 'wait', component: wait },
      { path: 'find', component: find }
    ]
  },
  { path: '/discovery', component: discovery, name: 'discovery' },
  { path: '/user', component: user, name: 'user' }
]

export default new Router({
  routes
})
