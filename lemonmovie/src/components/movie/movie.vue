<template>
<!-- <transition name="slide-right"> -->
  <div class="movie">
    <div class="header">
      <div class="title">
        <div class="city">广州</div>
        <div class="tab">
          <ul class="tab-box">
            <li class="tab-item" @click="changeCur(index)" :class="{'cur': item.active}" v-for="(item, index) in tabItems">
              <router-link :to="item.linkto">{{item.text}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <search></search>
    </div>
    <div class="content">
      <transition :name="slide">
        <router-view></router-view>
      </transition>
    </div>
  </div>
<!-- </transition> -->
</template>

<script>
import router from '../../router'
import search from 'components/search/search'
let tabItems = [
  { text: '热映', name: 'hot', linkto: '/movie/hot', active: true },
  { text: '待映', name: 'wait', linkto: '/movie/wait', active: false },
  { text: '找片', name: 'find', linkto: '/movie/find', active: false }
]
export default {
  created() {
    let lastView = ''
    this.tabItems.forEach(item => {
      if (item.active) lastView = item.linkto;
    })
    router.push(lastView)
  },
  data() {
    return {
      tabItems,
      slide: '',
      myUrl: ''
    }
  },
  watch: {
    '$route' (to, from) {
      let fromIndex = -1;
      let toIndex = -1;
      this.tabItems.forEach((item, index) => {
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
  components: {
    search
  },
  methods: {
    changeCur(index) {
      this.tabItems.forEach(tabItem => {
        tabItem.active = false;
      })
      this.tabItems[index].active = true;
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/index";
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
.movie {
  width: 100%;
  overflow: hidden;
  .header {
    width: 100%;
    background: @lmgreen;
    .title {
      width: 100%;
      height: 60px;
      color: #fff;
      position: relative;
      overflow: hidden;
      .city {
        position: absolute;
        left: 30px;
        top: 25px;
      }
      .tab {
        width: 180px;
        height: 34px;
        margin: 15px auto 0;
        padding: 2px;
        background: @lmgreen-deep;
        border-radius: 5px;
        line-height: 34px;
        text-align: center;
        font-size: 14px;
        .tab-box {
          display: flex;
          .tab-item {
            flex: 1;
            border-radius: 5px;
            transition: all 0.3s;
            &.cur {
              background: #fff;
              a {
                color: #666;
              }
            }
            a {
              color: #fff;
            }
          }
        }
      }
    }
  }
}

</style>
