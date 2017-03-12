<template>
  <div class="hot">
    <div class="movie">
      <ul class="movie-list">
        <li class="movie-item">
          <movie-item :hot="movieHot.hot"></movie-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import router from '../../router'
import movieItem from 'components/movie/movieItem.vue'
export default {
  data() {
    return {
      movieHot: {}
    }
  },
  created() {
    // console.log(1)
    // this.$parent.$emit('cur-href', router.currentRoute.path)
    this.axios.get('/movie/movieHot').then(response => {
      if (response.statusText === 'OK') {
        this.movieHot = response.data.data.data
        console.log(this.movieHot)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  components: {
    'movie-item': movieItem
  }
}
</script>

<style lang="less" scoped>
.hot {
  width: 100%;
}
</style>
