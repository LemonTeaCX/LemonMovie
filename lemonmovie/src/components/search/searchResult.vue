<template>
  <div class="searchResult">
    <div class="searchResult-header">
      <search class="searchResult-search" :textAlign="'left'" :canInput="true"></search>
      <button class="searchResult-button" @click="cancel">取消</button>
    </div>
    <div class="searchResult-hot">
      <div class="searchResult-hot-title">热门搜索</div>
      <div class="searchResult-hot-list">
        <ul>
          <li class="searchResult-hot-item">春娇与志明</li>
          <li class="searchResult-hot-item">超凡蜘蛛侠</li>
          <li class="searchResult-hot-item">加勒比海盗</li>
          <li class="searchResult-hot-item">冒险</li>
          <li class="searchResult-hot-item">剧情</li>
          <li class="searchResult-hot-item">盗梦空间</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import search from 'components/search/search'
export default {
  components: {
    search
  },
  methods: {
    cancel() {
      history.back();
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/index";
.searchResult {
  width: 100%;
  background: #eee;
  .searchResult-header {
    width: 100%;
    height: 50px;
    display: flex;
    .searchResult-search {
      flex: 6;
    }
    .searchResult-button {
      flex: 1;
      border-style: none;
      background: @lmgreen;
      color: #fff;
      outline: none;
    }
  }
  .searchResult-hot {
    width: 100%;
    .searchResult-hot-title {
      box-sizing: border-box;
      width: 100%;
      height: 32px;
      padding-left: 20px;
      font-size: 14px;
      line-height: 32px;
    }
    .searchResult-hot-list {
      font-family: '宋体';
      background: #fff;
      padding: 8px;
      font-size: 14px;
      .searchResult-hot-item {
        display: inline-block;
        margin: 5px 4px;
        padding: 8px 10px;
        background: #eee;
        border-radius: 5px;
      }
    }
  }
}
</style>
