<template>
  <div class="festivalBox">
    <div class="festivalName">{{festivalBoxData.festivalName}}</div>
    <div class="heldDate">{{festivalBoxData.heldDate}}</div>
    <div class="main">
      <img class="img" :src="festivalBoxData.img">
      <span class="prizeName">{{festivalBoxData.prizeName}}</span>
    </div>
    <div class="movieName">{{festivalBoxData.movieName}}</div>
  </div>
</template>

<script>
export default {
  props: {
    festivalBoxData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.festivalBox {
  width: 100%;
  height: 230px;
  overflow: hidden;
  .festivalName,.movieName {
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #000;
    font-size: 14px;
    overflow: hidden;
    
  }
  .heldDate {
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    text-align: center;
  }
  .main {
    width: 100%;
    height: 150px;
    position: relative;
    .img {
      width: 90%;
      height: 145px;
    }
    .prizeName {
      position: absolute;
      right: 10%;
      top: 0;
      background: #29A8FF;
      padding: 5px;
      color: #fff;
      font-size: 12px;
    }
    .movieName {

    }
  }
}
</style>
