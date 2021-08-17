<template>
  <div class="login-t">
    <div class="login-c">
      <div class="components-input-demo-presuffix">
        <div class="login-title">欢迎使用</div>
        <div class="login-title1">大会员系统</div>
        <a-input  placeholder="请输入账号" />
        <br />
        <!-- <a-icon slot="prefix" type="user" /> -->
        <a-input prefix="￥" placeholder="请输入密码" />
        <a-button type="primary" block @click="sendlogin"> 登录 </a-button>
        <div class="login-f">
          <a-checkbox @change="onChange">记住密码</a-checkbox>
          <a href="#">忘记密码?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = "";
    },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    sendlogin() {
      this.$router.push("/Home");
    },
  },
};
</script>
<style lang="less" scoped>
.login-t {
  width: auto;
  height: 100vh;
  position: relative;
  .ant-input-affix-wrapper {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-flex;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    padding: 4px 11px;
    width: 100%;
    text-align: start;
    background-color: #fff;
    background-image: none;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1.5715;
    margin-top: 25px;
  }
  .ant-btn-primary {
    color: #fff;
    background: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    margin-top: 25px;
  }
  .login-c {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login-f {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
    }
    .login-title {
      font-size: 48px;
      color: #1890ff;
      font-weight: bold;
      display: flex;
      justify-content: start;
    }
    .login-title1 {
      font-size: 36px;
      color: #1890ff;
      display: flex;
      justify-content: start;
    }
  }
}
</style>
