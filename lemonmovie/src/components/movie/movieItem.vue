<template>
  <div class="movie-item">
    <div class="item-img">
      <img class="hot-img" :src="hotInfo.img">
    </div>
    <div class="item-info">
      <div class="title">{{hotInfo.nm}}</div>
      <div class="popular">
        <div v-if="hotInfo.mk">观众<span class="num">{{hotInfo.mk}}</span></div>
        <div v-else><span class="num">{{hotInfo.wish}}</span>人想看</div>
      </div>
      <div class="scm">{{hotInfo.scm}}</div>
      <div class="show-info">{{hotInfo.showInfo}}</div>
    </div>
    <div class="item-buy" :class="{'pre-sale': !hotInfo.mk}">{{hotInfo.mk ? '购票' : '预售'}}</div>
  </div>
</template>

<script>
export default {
  props: {
    hotInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/index";
.movie-item {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 15px;
  display: flex;
  position: relative;
  .item-img {
    flex: 0 0 65px;
    .hot-img {
      width: 65px;
      height: auto;
    }
  }
  .item-info {
    flex: 1;
    padding-left: 15px;
    line-height: 24px;
    .title {
      color: #000;
      font-size: 20px;
    }
    .popular {
      font-size: 12px;
      color: #909090;
      .num {
        font-size: 16px;
        margin: 0 5px;
        color: @lmgreen-deep;
      }
    }
    .scm,.show-info {
      font-size: 14px;
      color: #616161;
    }
  }
  .item-buy {
    width: 50px;
    height: 26px;
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -13px;
    border: 1px solid @lmgreen;
    border-radius: 3px;
    text-align: center;
    line-height: 26px;
    color: @lmgreen;
    &.pre-sale {
      color: skyblue;
      border-color: skyblue;
    }
  }
}
</style>
