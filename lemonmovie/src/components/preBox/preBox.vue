<template>
  <div class="preBox">
    <div class="preBox-img">
      <img :src="preData.img">
    </div>
    <div class="preBox-desc">
      <div class="text movieName">{{preData.movieName}}</div>
      <div class="text originName">{{preData.originName}}</div>
    </div>
    <div class="play">
      <i class="iconfont">&#xf0013;</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    preData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.preBox {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .preBox-img {
    width: 100%;
    height: 100%;
    img {
      width: auto;
      height: 100%;
      display: block;
    }
  }
  .preBox-desc {
    box-sizing: border-box;
    padding-left: 5px;
    width: 60%;
    position: absolute;
    left: 0;
    bottom: 5px;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    font-weight: normal;
    font-family: '宋体';
    text-overflow: ellipsis;
    overflow: hidden;
    word-spacing: nowrap;
    .text {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .play {
    z-index: 10;
    position: absolute;
    right: 8px;
    bottom: 10px;
    color: #fff;
  }
}
</style>
