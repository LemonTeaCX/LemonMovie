<template>
  <transition name="fade-modal">
    <div class="modal" v-if="!onTime">
      <div class="modal-con">
        <div class="modal-text">{{text}}</div>
        <div class="modal-icon"><i class="iconfont">&#xe64d;</i></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  created() {
    clearTimeout(timer)
    let timer = setTimeout(() => {
      this.onTime = true
    }, 1500)
  },
  props: {
    text: {
      type: String,
      default() {
        return '敬请期待......'
      }
    }
  },
  data() {
    return {
      onTime: false
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/index";
.fade-modal-enter-active, .fade-modal-leave-active {
  transition: all .5s;
}
.fade-modal-enter, .fade-modal-leave-active {
  opacity: 0;
  transform: scale(1.2,1.2);
}
.modal {
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  text-align: center;
  &.hide {
    display: none;
  }
  .modal-con {
    .login-poa(60%, 120px);
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    line-height: 50px;
    .modal-icon {
      .iconfont {
        font-size: 40px;
      }
    }
  }
}
</style>
