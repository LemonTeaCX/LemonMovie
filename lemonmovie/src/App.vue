<template>
  <div id="app">
    <div class="content">
      <transition :name="slide">
        <router-view></router-view>
      </transition>
    </div>
    <div class="tab">
      <div class="tab-item" @click="changeActive(index)" v-for="(item, index) in navItems" :class="{'active': item.active}">
        <router-link :to="item.linkto">
          <span class="iconfont" v-html="item.icon"></span>
          <span class="text">{{item.text}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
let navItems = [
  { text: '电影', name: 'movie', linkto: '/movie', active: true, icon: '&#xe611;' },
  { text: '发现', name: 'discovery', linkto: '/discovery', active: false, icon: '&#xe60e;' },
  { text: '我的', name: 'user', linkto: '/user', active: false, icon: '&#xe609;' }
]
export default {
  data() {
    return {
      navItems,
      slide: ''
    }
  },
  watch: {
    '$route' (to, from) {
      let fromIndex = -1;
      let toIndex = -1;
      this.navItems.forEach((item, index) => {
        if (item.name === from.name) {
          fromIndex = index;
          return;
        }
        if (item.name === to.name) {
          toIndex = index;
          return;
        }
      })
      this.slide = fromIndex < toIndex ? 'slide-left' : 'slide-right';
    }
  },
  methods: {
    changeActive(index) {
      this.navItems.forEach(navItem => {
        navItem.active = false;
      })
      this.navItems[index].active = true;
    }
  }
}
</script>

<style lang="less" scoped>
@import "./common/less/index";
.slide-right-enter-active, {
  transition: all .5s;
}
.slide-right-enter, {
  transform: translateX(-100%);
}
.slide-left-enter-active {
  transition: all .5s;
}
.slide-left-enter {
  transform: translateX(100%);
}
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
        font-size: 20px;
        transition: all 0.3s;
      }
      .text {
        display: block;
        transition: all 0.3s;
      }
      &.active {
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
