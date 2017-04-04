<template>
  <div class="classlist-wrapper">
    <div class="classlist">
      <span class="list-title">{{classListData.tagTypeName}}</span>
      <span class="list-item" v-for="item in classListData.tagList">{{item.tagName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classListData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.classlist-wrapper {
  height: 40px;
  overflow: hidden;
  .classlist {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    padding-bottom: 17px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap; 
    font-size: 14px;
    .list-item {
      height: 30px;
      padding: 4px 12px;
      margin: 0 5px;
      border-radius: 15px;
      border: 1px solid #E9E9E9;
      color: #000;
      &:active {
        background: #eee;
      }
    }
  }
}
</style>
