import Vue from 'vue'
import Router from 'vue-router'

// movie模块
import movie from 'components/movie/movie'
import hot from 'components/movie/hot'
import wait from 'components/movie/wait'
import find from 'components/movie/find'
import movieDetail from 'components/movie/movieDetail'

// discovery模块
import discovery from 'components/discovery/discovery'

// user模块
import user from 'components/user/user'
import login from 'components/user/login'

// search模块
import searchResult from 'components/search/searchResult'

Vue.use(Router)

const routes = [
  {
    path: '/movie',
    component: movie,
    name: 'movie',
    children: [
      { path: 'hot', component: hot, name: 'hot' },
      { path: 'wait', component: wait, name: 'wait' },
      { path: 'find', component: find, name: 'find' },
      { path: 'movieDetail', name: 'movieDetail', components: {movieDetail: movieDetail} }
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
  },
  { path: '/searchResult', components: {searchResult: searchResult}, name: 'searchResult' }
]

export default new Router({
  routes
})
