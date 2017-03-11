<template>
  <div class="movie">
    <div class="header">
      <div class="title">
        <div class="city">广州</div>
        <div class="tab">
          <ul>
            <li class="tab-item" v-for="item in tabItem">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="search">
        <input type="text" placeholder="找影视剧、影人、影院">
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
let tabItem = ['热映', '待映', '找片'];
export default {
  data() {
    return {
      tabItem
    }
  }
}
</script>

<style lang="less" scoped>
.movie {
  width: 100%;
}

</style>
