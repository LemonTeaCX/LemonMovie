<template>
  <div class="loading">
    <i class="iconfont">&#xe64d;</i>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
@import "../../common/less/index";
.loading {
  width: 100%;
  height: 100%;
  // background: rgba(0,0,0,0.3);
  // position: relative;
  left: 0;
  z-index: 1000;
  .iconfont {
    .login-poa(50px, 50px);
    font-size: 50px;
  }
}
</style>
