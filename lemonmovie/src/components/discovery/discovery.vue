<template>
  <div class="discovery">
    <search></search>
    <div class="nav">
      <ul class="nav-box">
        <li class="nav-item" v-for="navItem in discovery.nav">
          <div class="icon">
            <img :src="navItem.image.url">
          </div>
          <div class="title">{{navItem.title}}</div>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="time">今天</div>
      <div class="news">
        <ul>
          <li class="news-item" v-for="newsItem in discovery.feeds">
            <div class="icon">
              <img :src="newsItem.images[0].url">
            </div>
            <div class="text">
              <div class="title">{{newsItem.title}}</div>
              <div class="label">
                <span class="nickName">{{newsItem.user.nickName}}</span>
                <span class="commentCount">
                  <i class="iconfont">&#xe616;</i>
                  {{newsItem.commentCount}}
                </span>
                <span class="viewCount">
                  <i class="iconfont">&#xe699;</i>
                  {{newsItem.viewCount}}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import search from 'components/search/search'

export default {
  data() {
    return {
      discovery: []
    }
  },
  created() {
    this.axios.get('/discovery/discovery').then(response => {
      if (response.statusText === 'OK') {
        this.discovery = response.data.data.data
        // console.log(this.discovery)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  components: {
    search
  }
}
</script>

<style lang="less" scoped>
.discovery {
  width: 100%;
  background: #f2f2f2;
  overflow: hidden;
  .nav {
    width: 100%;
    height: 80px;
    background: #fff;
    font-size: 14px;
    .nav-box {
      width: 100%;
      height: 80px;
      display: flex;
      .nav-item {
        flex: 1;
        text-align: center;
        .icon img {
          width: 40px;
          height: 40px;
          margin: 8px 0 4px;
        }
      }
    }
  }
  .content {
    .time {
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      padding-left: 15px;
      line-height: 30px;
      font-size: 12px;
    }
    .news {
      width: 100%;
      box-sizing: border-box;
      background: #fff;
      padding: 0 18px;
      .news-item {
        border-bottom: 1px solid #E0E0E0;
        display: flex;
        padding: 15px 0;
        .icon {
          flex: 0 0 105px;
          height: 80px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          flex: 1;
          padding-left: 10px;
          .title {
            height: 48px;
            overflow: hidden;
            font-size: 16px;
            color: #000;
            line-height: 24px;
          }
          .label {
            font-size: 12px;
            margin-top: 10px;
            .nickName {
              float: left;
            }
            .commentCount {
              float: right;
            }
            .viewCount {
              float: right;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
