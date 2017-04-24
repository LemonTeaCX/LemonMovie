<template>
  <div class="commentBox">
    <div class="commentBox-icon">
      <img :src="commentData.avatarurl">
    </div>
    <div class="commentBox-con">
      <div class="commentBox-nickName">{{commentData.nickName}}</div>
      <div class="commentBox-content">{{commentData.content}}</div>
      <div class="commentBox-time">{{commentData.time}}</div>
      <div class="commentBox-score">{{commentData.score}}<span class="score">分</span></div>
      <div class="commentBox-approve">{{commentData.approve}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.commentBox {
  width: 100%;
  background: #fff;
  padding-top: 10px;
  display: flex;
  position: relative;
  .commentBox-icon {
    flex: 0 0 70px;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin: auto;
      display: block;
    }
  }
  .commentBox-con {
    flex: 1;
    padding-right: 15px;
    font-size: 14px;
    line-height: 20px;
    .commentBox-nickName {
      height: 20px;
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 20px;
      color: #000;
    }
    .commentBox-time {
      color: #AAAAAA;
    }
    .commentBox-score {
      color: #F8C300;
      position: absolute;
      right: 15px;
      top: 10px;
      font-size: 22px;
      .score {
        font-size: 12px;
      }
    }
    .commentBox-approve {
      position: absolute;
      right: 15px;
      bottom: 0;
      color: #AAAAAA;
    }
  }
}
</style>
