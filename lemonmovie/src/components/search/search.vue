<template>
  <div class="search-wrapper">
    <a class="search" href="javascript:;">
      <i class="iconfont">&#xe60e;</i>
      <span class="text">找影视剧、影人、影院</span>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import "../../common/less/index";
.search-wrapper {
  width: 100%;
  height: 50px;
  background: @lmgreen;
  box-sizing: border-box;
  padding: 10px 15px;
  .search {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 15px;
    background: #fff;
    display: block;
    line-height: 30px;
    font-size: 14px;
    color: #ADADAD;
    text-align: center;
  }
}
</style>
