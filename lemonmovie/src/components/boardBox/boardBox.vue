<template>
  <div class="boardBox">
    <div class="content">
      <div class="boardName" :class="boardBoxData.titleTpye">{{boardBoxData.boardName}}</div>
      <div class="movieName">{{boardBoxData.movieName}}</div>
    </div>
    <div class="icon">
      <img class="img01" :src="boardBoxData.movieImgs[0]">
      <img class="img02" :src="boardBoxData.movieImgs[1]">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boardBoxData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.boardBox {
  width: 100%;
  overflow: hidden;
  height: 100px;
  padding-left: 20px;
  padding-top: 20px;
  box-sizing: border-box;
  display: flex;
  .content {
    flex: 1;
    line-height: 24px;
    .boardName {
      &.skyblue {
        color: skyblue;
      }
      &.tomato {
        color: tomato;
      }
      &.orange {
        color: orange;
      }
      &.yellowgreen {
        color: yellowgreen;
      }
    }
    .movieName {
      color: #888;
      font-size: 12px;
    }
  }
  .icon {
    height: 80px;
    flex: 0 0 70px;
    position: relative;
    .img01 {
      width: 60px;
      height: auto;
      position: absolute;
      right: 20px;
      bottom: 0;
      z-index: 2;
    }
    .img02 {
      width: 50px;
      height: auto;
      position: absolute;
      right: 10px;
      bottom: 0;
      z-index: 1;
    }
  }
}
</style>
