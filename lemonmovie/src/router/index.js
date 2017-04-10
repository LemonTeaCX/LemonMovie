import Vue from 'vue'
import Router from 'vue-router'

// movie模块
import movie from 'components/movie/movie'
import hot from 'components/movie/hot'
import wait from 'components/movie/wait'
import find from 'components/movie/find'

// discovery模块
import discovery from 'components/discovery/discovery'

// user模块
import user from 'components/user/user'
import login from 'components/user/login'

Vue.use(Router)

const routes = [
  {
    path: '/movie',
    component: movie,
    name: 'movie',
    children: [
      { path: 'hot', name: 'hot', component: hot },
      { path: 'wait', name: 'wait', component: wait },
      { path: 'find', name: 'find', component: find }
    ]
  },
  { path: '/discovery', component: discovery, name: 'discovery' },
  {
    path: '/user',
    component: user,
    name: 'user',
    children: [
      { path: 'login', component: login, name: 'login' }
    ]
  }
]

export default new Router({
  routes
})
