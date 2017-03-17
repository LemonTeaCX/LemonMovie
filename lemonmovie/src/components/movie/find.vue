<template>
  <div class="find">
    <div class="classlist">
      <div class="classlist-item" v-for="classListItem in movieFind.classList">
        <classlist :classList="classListItem"></classlist>
      </div>
    </div>
  </div>
</template>

<script>
import classlist from 'components/classlist/classlist'
export default {
  data() {
    return {
      movieFind: {}
    }
  },
  created() {
    this.axios.get('/movie/movieFind').then(response => {
      if (response.statusText === 'OK') {
        this.movieFind = response.data.data
        // console.log(this.movieFind)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  components: {
    classlist
  }
}
</script>

<style lang="less" scoped>
.find {
  width: 100%;
  overflow: hidden;
}
</style>
