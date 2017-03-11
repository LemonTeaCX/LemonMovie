<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="tab">
      <div class="tab-item" @click="goMovie">
        <router-link to="/movie" :class="{'active':active === 0}">
          <i class="iconfont">&#xe611;</i>
          <span class="text">电影</span>
        </router-link>
      </div>
      <div class="tab-item" @click="goDiscovery">
        <router-link to="/discovery" :class="{'active':active === 1}">
          <i class="iconfont">&#xe60e;</i>
          <span class="text">发现</span>
        </router-link>
      </div>
      <div class="tab-item" @click="goUser">
        <router-link to="/user" :class="{'active':active === 2}">
          <i class="iconfont">&#xe609;</i>
          <span class="text">我的</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const MOVIE = 0;
const DISCOVERY = 1;
const USER = 2;
export default {
  data() {
    return {
      active: MOVIE
    }
  },
  methods: {
    goMovie() {
      this.active = MOVIE;
    },
    goDiscovery() {
      this.active = DISCOVERY;
    },
    goUser() {
      this.active = USER;
    }
  }
}
</script>

<style lang="less" scoped>
@import "./common/less/index";
#app {
  .content {
    padding-bottom: 50px;
  }
  .tab {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #eee;
    border-top: 1px solid #e3e3e3;
    display: flex;
    text-align: center;
    font-size: 12px;
    .tab-item {
      flex: 1;
      .iconfont {
        display: block;
        margin: 5px 0 3px;
        font-size: 24px;
      }
      .text {
        display: block;
      }
      .active {
        .iconfont {
          color: @lmgreen;
        }
        .text {
          color: @lmgreen;
        }
      }
    }
  }
}
</style>
