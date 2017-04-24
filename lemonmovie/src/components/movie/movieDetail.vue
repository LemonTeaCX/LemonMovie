<template>
  <div class="movie-detail" v-if="movieDetail.loaded">
    <div class="detail-header" :class="{'showTitle': showTitle}">
      <div class="detail-header-back" @click="back"><i class="iconfont">&#xe746;</i></div>
      <div class="detail-header-title">{{showTitle ? movieDetail.MovieDetailModel.nm : ''}}</div>
      <div class="detail-header-share"><i class="iconfont">&#xf000b;</i></div>
    </div>
    <div class="detail-con-bg">
      <div class="detail-con-bgIn" :style="{ backgroundImage: 'url('+movieDetail.MovieDetailModel.img+')' }"></div>
    </div>
    <div class="detail-con">
      <div class="detail-conIn">
        <div class="detail-icon">
          <img :src="movieDetail.MovieDetailModel.img">
          <i class="iconfont">&#xf0013;</i>
        </div>
        <div class="detail-desc">
          <div class="detail-desc-nm">{{movieDetail.MovieDetailModel.nm}}</div>
          <div class="detail-desc-score">{{movieDetail.MovieDetailModel.sc}}</div>
          <div class="detail-desc-snum">({{movieDetail.MovieDetailModel.snum}}评分)</div>
          <div class="detail-desc-cat">{{movieDetail.MovieDetailModel.cat}}</div>
          <div class="detail-desc-src">{{movieDetail.MovieDetailModel.src}}/90分钟</div>
          <div class="detail-desc-rt">{{movieDetail.MovieDetailModel.rt}}</div>
        </div>
      </div>
      <div class="detail-operation">
        <button>想看</button>
        <button>评分</button>
      </div>
    </div>
    <div class="detail-introduce">
      <div class="detail-introduce-text" :class="showMoreIntroduce ? 'more' : ''">
        {{movieDetail.MovieDetailModel.dra.slice(3, movieDetail.MovieDetailModel.dra.length-4)}}
      </div>
      <div class="detail-introduce-more" @click="showMore">多</div>
    </div>
    <div class="detail-hcmts" v-if="movieDetail.CommentResponseModel.hcmts">
      <div class="detail-hcmts-title">专业评论</div>
      <div class="detail-hcmts-list">
        <div class="detail-hcmts-listItem" v-for="hcmtsItem in movieDetail.CommentResponseModel.hcmts">
          <comment-box :commentData="hcmtsItem"></comment-box>
        </div>
      </div>
    </div>
    <div class="detail-cmts" v-if="movieDetail.CommentResponseModel.cmts">
      <div class="detail-cmts-title">短评</div>
      <div class="detail-cmts-list">
        <div class="detail-cmts-listItem" v-for="cmtsItem in movieDetail.CommentResponseModel.cmts">
          <comment-box :commentData="cmtsItem"></comment-box>
        </div>
      </div>
    </div>
    <div class="detail-buy">
      立即购票
    </div>
  </div>
</template>

<script>
import commentBox from 'components/commentBox/commentBox'
export default {
  data() {
    return {
      movieDetail: {},
      showMoreIntroduce: false,
      showTitle: false
    }
  },
  created() {
    this.movieDetail.showTitle = true;
    this.movieDetail.loaded = false;
    let movieId = this.$route.query
    let url = `/movie/${movieId}.json`
    // console.log(url)
    this.axios.get(url).then(response => {
      if (response.statusText === 'OK') {
        this.movieDetail = response.data.data
        // console.log(this.movieDetail)
        this.movieDetail.loaded = true;
        this.movieDetail.img = this.movieDetail.MovieDetailModel.img;
        // console.log(this.movieDetail.img)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    back() {
      history.back()
    },
    showMore() {
      this.showMoreIntroduce = !this.showMoreIntroduce;
    },
    handleScroll() {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop >= 240) {
        this.showTitle = true;
      } else {
        this.showTitle = false;
      }
    }
  },
  components: {
    'comment-box': commentBox
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/index";
.movie-detail {
  font-family: '宋体';
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  background: #F6F6F6;
  .detail-header {
    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    display: flex;
    line-height: 50px;
    text-align: center;
    color: #fff;
    transition: all 0.5s;
    &.showTitle {
      background: @lmgreen;
    }
    .detail-header-back {
      flex: 0 0 60px;
    }
    .detail-header-title {
      flex: 1;
      font-weight: bold;
    }
    .detail-header-share {
      flex: 0 0 60px;
    }
    .iconfont {
      font-size: 24px;
    }
  }
  .detail-con-bg {
    width: 100%;
    height: 270px;
    overflow: hidden;
    position: absolute;
    z-index: 10;
    .detail-con-bgIn {
      width: 120%;
      height: 120%;
      margin-left: -10%;
      margin-top: -10%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      filter: blur(15px);
    }
  }
  .detail-con {
    position: absolute;
    left: 0;
    z-index: 20;
    box-sizing: border-box;
    width: 100%;
    height: 270px;
    padding: 50px 20px 20px;
    .detail-conIn {
      width: 100%;
      display: flex;
      .detail-icon {
        flex: 0 0 110px;
        position: relative;
        border: 1px solid #fff;
        img {
          width: 110px;
          height: 160px;
        }
        .iconfont {
          width: 50px;
          height: 50px;
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          color: #fff;
          font-size: 50px;
          opacity: 0.7;
        }
      }
      .detail-desc {
        flex: 1;
        padding-left: 20px;
        line-height: 27px;
        font-size: 14px;
        color: #fff;
        .detail-desc-nm {
          font-weight: bold;
          font-size: 16px;
        }
        .detail-desc-score {
          color: #F8C300;
        }
        .detail-desc-snum {
          font-size: 12px;
        }
      }
    }
    .detail-operation {
      width: 100%;
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      button {
        width: 47%;
        height: 30px;
        background: rgba(255,255,255,0.3);
        border-radius: 5px;
        border-style: none;
        border: 1px solid rgba(255,255,255,0.5);
        color: #fff;
      }
    }
  }
  .detail-introduce {
    margin-top: 270px;
    background: #fff;
    padding: 15px;
    line-height: 24px;
    color: #000;
    font-size: 12px;
    .detail-introduce-text {
      height: 70px;
      overflow: hidden;
      &.more {
        height: auto;
      }
    }
    .detail-introduce-more {
      height: 20px;
      text-align: center;
    }
  }
  .detail-hcmts {
    margin-top: 20px;
    .detail-hcmts-title {
      height: 40px;
      background: #fff;
      border-bottom: 1px solid #eee;
      padding-left: 20px;
      line-height: 40px;
      font-size: 14px;
    }
    .detail-hcmts-listItem {
      border-bottom: 1px solid #eee;
    }
  }
  .detail-cmts {
    margin-top: 20px;
    .detail-cmts-title {
      height: 40px;
      background: #fff;
      border-bottom: 1px solid #eee;
      padding-left: 20px;
      line-height: 40px;
      font-size: 14px;
    }
    .detail-cmts-listItem {
      border-bottom: 1px solid #eee;
    }
  }
  .detail-buy {
    width: 100%;
    height: 50px;
    background: @lmgreen;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    line-height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
  }
}

</style>
