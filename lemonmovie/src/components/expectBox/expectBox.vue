<template>
  <div class="expectBox">
    <div class="expect-comingTitle">{{expectData.comingTitle}}</div>
    <div class="expect-img">
      <img :src="expectData.img" >
    </div>
    <div class="expect-nm">{{expectData.nm}}</div>
    <div class="expect-wish">{{expectData.wish}}人想看</div>
  </div>
</template>

<script>
export default {
  props: {
    expectData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.expectBox {
  width: 100%;
  height: 100%;
  .expect-comingTitle {
    font-size: 14px;
    color: #000;
    line-height: 20px;
  }
  .expect-img {
    width: 100%;
    height: 115px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }
  .expect-nm {
    margin: 5px 0 3px;
    font-size: 14px;
    color: #000;
    line-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-spacing: nowrap;
  }
  .expect-wish {
    font-size: 12px;
    color: #9A9A9A;
  }
}
</style>
