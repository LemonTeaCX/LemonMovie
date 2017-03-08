<template>
  <div id="app">
    <router-view></router-view>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/movie">电影</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/discovery">发现</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/user">我的</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
#app {
  .tab {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #f5f5f5;
    border-top: 1px solid #e3e3e3;
    display: flex;
    text-align: center;
    line-height: 50px;
    font-size: 12px;
    .tab-item {
      flex: 1;
    }
  }
}
</style>
