<template>
  <transition name="fade">
    <div class="login">
      <span class="login-back" @click="back">返回</span>
      <div class="logo">
        <img src="./images/logo.jpg" height="600" width="700" alt="">
      </div>
      <h1>Lemon Movie</h1>
      <div class="login-inputs">
        <input class="name" placeholder="请输入账号" type="text" v-model="name">
        <input class="pwd" placeholder="请输入密码" type="password" v-model="pwd">
      </div>
      <input class="login-button" type="button" value="登录" @click="login">
      <modal v-if="isShowModal" :text="modalText"></modal>
    </div>
  </transition>
</template>

<script>
import modal from 'components/modal/modal'
import router from '../../router'
export default {
  data() {
    return {
      isShowModal: false,
      name: '',
      pwd: '',
      modalText: ''
    }
  },
  methods: {
    // 返回
    back() {
      history.back()
    },
    // 登录
    login() {
      if (this.name === '' || this.name === null) {
        this.showModal('请输入账号...')
        return
      }
      if (this.name !== '18819442175') {
        this.showModal('账号有误，请重新输入...')
        return
      }
      if (this.pwd !== '940217') {
        this.showModal('密码有误，请重新输入...')
        return
      }
      window.localStorage.setItem('isLogin', 'true')
      this.showModal('登录中...', () => {
        router.push('/user')
      })
    },
    // 显示模态框
    showModal(modalText, fn) {
      this.modalText = modalText
      this.isShowModal = true
      setTimeout(() => {
        this.isShowModal = false
        fn && fn()
      }, 2000);
    }
  },
  components: {
    modal
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/index";
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: scale(1.2,1.2);
}
.login {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  .login-back {
    padding: 5px;
    color: #a1a1a1;
    font-size: 14px;
    padding-left: 10px;
    position: absolute;
    left: 30px;
    top: 30px;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 7px;
      transform: rotate(-45deg);
      width: 8px;
      height: 8px;
      border-left: 2px solid #ddd;
      border-top: 2px solid #ddd;
    }
  }
  .logo {
    .login-poa(100px, 100px);
    margin-top: -230px;
    img {
      width: 100px;
      height: auto;
      margin: auto;
    }
  }
  h1 {
    .login-poa(100%, 80px);
    margin-top: -150px;
    line-height: 80px;
    text-align: center;
    color: @lmgreen;
    font-size: 24px;
    font-weight: bold;
  }
  .login-inputs {
    .login-poa(80%, 80px);
    input {
      box-sizing: border-box;
      border: 1px solid #ddd;
      width: 100%;
      height: 50%;
      padding-left: 40px;
      font-size: 12px;
      .placeholder-color(#a1a1a1);
      &.name {
        border-bottom: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      &.pwd {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
  .login-button {
    .login-poa(80%, 40px);
    outline: none;
    background: skyblue;
    margin-top: 60px;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    &:active {
      background: #97C8E3;
    }
  }
}
</style>
