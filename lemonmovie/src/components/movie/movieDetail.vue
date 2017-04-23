<template>
  <div class="movie-detail" v-if="movieDetail.loaded">
    <div class="detail-header">
      <div class="detail-header-back"><i class="iconfont">&#xe746;</i></div>
      <div class="detail-header-title">{{movieDetail.MovieDetailModel.nm}}</div>
      <div class="detail-header-share"><i class="iconfont">&#xf000b;</i></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieDetail: {}
    }
  },
  created() {
    this.movieDetail.showTitle = true;
    this.movieDetail.loaded = false;
    let movieId = this.$route.query
    let url = `/movie/${movieId}.json`
    this.axios.get(url).then(response => {
      if (response.statusText === 'OK') {
        this.movieDetail = response.data.data
        console.log(this.movieDetail)
        this.movieDetail.loaded = true;
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/index";
.movie-detail {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  background: #F6F6F6;
  .detail-header {
    width: 100%;
    height: 50px;
    // background: rgba(0,0,0,0);
    display: flex;
    line-height: 50px;
    text-align: center;
    color: #fff;
    &.showTitle {
      background: @lmgreen;
    }
    .detail-header-back {
      flex: 0 0 60px;
    }
    .detail-header-title {
      flex: 1;
    }
    .detail-header-share {
      flex: 0 0 60px;
    }
    .iconfont {
      font-size: 24px;
    }
  }
}

</style>
