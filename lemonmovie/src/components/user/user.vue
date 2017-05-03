<template>
  <div class="user">
    <router-view></router-view>
    <div class="header">
      <div class="icon-wrapper">
        <span class="icon">
          <img src="./images/logo.jpg" height="600" width="700" alt="">
        </span>
      </div>
      <div class="login-now">
        <router-link to="/user/login" class="login-now-a">
          <span class="login-text">立即登录</span>
          <span class="login-arr"><i class="iconfont">&#xe62d;</i></span>
        </router-link>
      </div>
    </div>
    <div class="nav">
      <ul class="nav-tab">
        <li class="nav-item" @click="loginFirst">
          <i class="iconfont like">&#xe605;</i>
          <span class="nav-item-text">想看</span>
        </li>
        <li class="nav-item">
          <i class="iconfont looked">&#xe699;</i>
          <span class="nav-item-text">看过</span>
        </li>
        <li class="nav-item">
          <i class="iconfont comment">&#xe69e;</i>
          <span class="nav-item-text">影评</span>
        </li>
        <li class="nav-item">
          <i class="iconfont topic">&#xe6eb;</i>
          <span class="nav-item-text">话题</span>
        </li>
      </ul>
    </div>
    <div class="order">
      <list-item class="order-item" :l-text="'我的订单'" :r-text="'全部'"></list-item>
      <ul class="order-tab">
        <li class="order-item">
          <i class="iconfont">&#xe781;</i>
          <span class="order-item-text">未消费</span>
        </li>
        <li class="order-item">
          <i class="iconfont">&#xe64a;</i>
          <span class="order-item-text">代付款</span>
        </li>
        <li class="order-item">
          <i class="iconfont">&#xe616;</i>
          <span class="order-item-text">待评价</span>
        </li>
        <li class="order-item">
          <i class="iconfont">&#xe617;</i>
          <span class="order-item-text">退款</span>
        </li>
      </ul>
    </div>
    <div class="message">
      <ul class="message-list">
        <li class="message-item">
          <list-item :l-text="'我的消息'"></list-item>
        </li>
        <li class="message-item">
          <list-item :l-text="'我的收藏'"></list-item>
        </li>
        <li class="message-item">
          <list-item :l-text="'会员中心'"></list-item>
        </li>
        <li class="message-item">
          <list-item :l-text="'我的成就'"></list-item>
        </li>
      </ul>
    </div>
    <div class="account">
      <ul class="account-list">
        <li class="account-item">
          <list-item :l-text="'我的钱包'"></list-item>
        </li>
        <li class="account-item">
          <list-item :l-text="'余额'" :r-text="'0.00元'"></list-item>
        </li>
        <li class="account-item">
          <list-item :l-text="'优惠券'"></list-item>
        </li>
        <li class="account-item">
          <list-item :l-text="'商城'"></list-item>
        </li>
      </ul>
    </div>
    <modal v-if="showLoginFirst" :text="'请先登录......'"></modal>
  </div>
</template>

<script>
import listitem from 'components/listitem/listitem'
import modal from 'components/modal/modal'
export default {
  created() {
    let isLogin = window.localStorage.getItem('isLogin')
    if (isLogin === 'true') {
      this.axios.get('/user/user').then(response => {
        if (response.statusText === 'OK') {
          this.userData = response.data.data.data.user
          // console.log(this.userData)
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
  data() {
    return {
      userData: {},
      showLoginFirst: false
    }
  },
  components: {
    'list-item': listitem,
    modal
  },
  methods: {
    loginFirst() {
      this.showLoginFirst = true;
      setTimeout(() => {
        this.showLoginFirst = false;
      }, 2000);
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/index";
.user {
  width: 100%;
  background: #F5F5F5;
  overflow: hidden;
  .header {
    width: 100%;
    height: 110px;
    background: @lmgreen;
    color: #fff;
    line-height: 110px;
    position: relative;
    display: flex;
    .icon-wrapper {
      flex: 0 0 100px;
      .icon {
        width: 70px;
        height: 70px;
        float: left;
        margin: 20px 0 20px 30px;
        border-radius: 50%;
        background: #fff;
        overflow: hidden;
        img {
          width: 60px;
          height: auto;
        }
      }
    }
    .login-now {
      flex: 1;
      height: 110px;
      padding-left: 30px;
      .login-now-a {
        width: 100%;
        height: 100%;
        display: block;
      }
      .login-text {
        float: left;
        height: 110px;
        font-size: 20px;
        font-family: '宋体';
        color: #fff;
      }
      .login-arr {
        position: absolute;
        right: 30px;
        height: 110px;
        font-size: 20px;
        color: #fff;
      }
    }
  }
  .nav {
    width: 100%;
    height: 70px;
    background: #fff;
    border-bottom: 1px solid #e1e1e1;
    text-align: center;
    .nav-tab {
      width: 100%;
      display: flex;
      .nav-item {
        flex: 1;
        .iconfont {
          display: block;
          margin: 10px 0 6px;
          font-size: 28px;
          &.like {
            color: #FD6232;
          }
          &.looked {
            color: #42C6CA
          }
          &.comment {
            color: #FFB400
          }
          &.topic {
            color: #24B3EF
          }
        }
        .nav-item-text {
          display: block;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
  .order {
    background: #fff;
    .list-box;
    .order-item {
      border-bottom: 1px solid #e1e1e1;
    }
    .order-tab {
      width: 100%;
      display: flex;
      .order-item {
        flex: 1;
        height: 70px;
        text-align: center;
        .iconfont {
          display: block;
          margin: 10px 0 6px;
          font-size: 28px;
          color: #878787;
          font-weight: bold;
        }
        .order-item-text {
          display: block;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
  .message {
    .list-box;
    .message-item {
      border-bottom: 1px solid #e1e1e1;
      &:last-child {
        border: none;
      }
    }
  }
  .account {
    .list-box;
    .account-item {
      border-bottom: 1px solid #e1e1e1;
      &:last-child {
        border: none;
      }
    }
  }
}
</style>
