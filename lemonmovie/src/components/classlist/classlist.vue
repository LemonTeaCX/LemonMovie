<template>
  <div class="classlist">
    <slider :pages="pages" :sliderinit="sliderinit">
      <span class="list-title">{{classList.tagTypeName}}</span>
      <span class="list-item" v-for="item in classList.tagList">{{item.tagName}}</span>
    </slider>
  </div>
</template>

<script>
export default {
  props: {
    classList: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
  },
  data() {
    return {
    }
  },
  methods: {
    _initScroll() {
    }
  }
}
</script>

<style lang="less" scoped>
.classlist {
  height: 50px;
  line-height: 50px;
}
</style>
