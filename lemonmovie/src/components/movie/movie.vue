<template>
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
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import router from '../../router'
import search from 'components/search/search'
let tabItems = [
  { text: '热映', linkto: '/movie/hot', active: true },
  { text: '待映', linkto: '/movie/wait', active: false },
  { text: '找片', linkto: '/movie/find', active: false }
]
export default {
  created() {
    // console.log(router.currentRoute)
    // console.log(router)
    // let lemon = '/movie/wait';
    // router.push(lemon);
    // console.log(0)
    /* this.$on('cur-href', (curHref) => {
      console.log('come in')
      console.log(curHref)
      router.push(curHref);
    }) */
    // this.$parent.$emit('cur-href', router.currentRoute.path)
    // let curHref = this.myUrl;
    // router.push(curHref);
    console.log(this.$route)
  },
  data() {
    return {
      tabItems
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
        background: #77AD65;
        border-radius: 5px;
        line-height: 34px;
        text-align: center;
        font-size: 14px;
        .tab-box {
          display: flex;
          .tab-item {
            flex: 1;
            border-radius: 5px;
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
