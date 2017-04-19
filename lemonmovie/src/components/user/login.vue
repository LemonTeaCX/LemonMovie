<template>
  <div class="login">
    <h1>Lemon Movie</h1>
    <div class="login-input">
      <input class="name" type="text">
      <input class="pwd" type="password">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
@import "../../common/less/index";
.login {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  h1 {
    .login-poa(100%, 80px);
    margin-top: -150px;
    line-height: 80px;
    text-align: center;
    color: @lmgreen;
    font-size: 24px;
  }
  .login-input {
    .login-poa(80%, 80px);
    input {
      border: 1px solid #ddd;
      width: 100%;
      height: 50%;
      &.name {
        border-bottom: 0;
      }
    }
  }
}
</style>
