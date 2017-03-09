<template>
  <div class="listitem">
    <span class="left-text">{{lText}}</span>
    <span class="right-text" v-if="rText">{{rText}}</span>
    <span class="right-arr">
      <i class="iconfont">&#xe62d;</i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    lText: {
      type: String,
      default: 'left-text'
    },
    rText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.listitem {
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  background: #fff;
  padding: 0 15px;
  line-height: 45px;
  position: relative;
  .left-text {
    float: left;
    font-size: 14px;
  }
  .right-text {
    float: right;
    margin-right: 18px;
    font-size: 14px;
    color: #979797; 
  }
  .right-arr {
    position: absolute;
    right: 15px;
    height: 45px;
    margin-top: -2px;
    color: #979797; 
  }
}
</style>
