<template>
  <div class="search-wrapper">
    <router-link v-if="!canInput" :to="{name:'searchResult'}" class="search" :class="{'textLeft': textAlign === 'left'}">
      <i class="iconfont">&#xe60e;</i>
      <span class="text">找影视剧、影人、影院</span>
    </router-link>
    <input v-if="canInput" type="text" placeholder="找影视剧、影人、影院" class="search" :class="{'textLeft': textAlign === 'left'}">
  </div>
</template>

<script>
export default {
  props: {
    textAlign: {
      type: String,
      default() {
        return 'center'
      }
    },
    canInput: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
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
    .placeholder-color(#ADADAD);
    &.textLeft {
      text-align: left;
      padding-left: 15px;
    }
  }
  input {
    outline: none;
  }
}
</style>
