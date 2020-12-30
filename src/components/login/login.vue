<template>
  <div id="body">
    <el-form autoComplete="on"
             :model="loginForm"
             ref="loginForm"
             class="login-form-layout"
             label-position="left">
      <h2 class="login-title color-main">系统登录</h2>
      <el-form-item prop="username">
        <el-input name="username"
                  type="text"
                  v-model="loginForm.username"
                  autoComplete="on"
                  placeholder="请输入用户名">
          <span slot="prefix">
            <svg-icon icon-class="user" class="color-main"></svg-icon>
          </span>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password"
                  :type="pwdType"
                  @keyup.enter.native="handleLogin"
                  v-model="loginForm.password"
                  autoComplete="on"
                  placeholder="请输入密码">
          <span slot="prefix">
            <svg-icon icon-class="password" class="color-main"></svg-icon>
          </span>
          <span slot="suffix" @click="showPwd">
            <svg-icon icon-class="eye" class="color-main"></svg-icon>
          </span>
        </el-input>
      </el-form-item>
      <el-form-item style="margin-bottom: 60px;text-align: center">
        <el-button style="width: 45%" type="primary" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>

    <!--    <img :src="login_backgroud" class="login-center-layout">-->
    <!--    <img :src="login_center_bg" class="login-center-layout">-->

  </div>
</template>

<script>

export default {
  name: 'login',
  data() {

    return {
      loginForm: {
        username: '',
        password: '',
      },

      loading: false,
      pwdType: 'password',
      dialogVisible: false,
      supportDialogVisible: false
    }
  },
  created() {

    if (this.loginForm.username === undefined || this.loginForm.username == null || this.loginForm.username === '') {
      this.loginForm.username = 'admin';
    }
    if (this.loginForm.password === undefined || this.loginForm.password == null) {
      this.loginForm.password = '';
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // let isSupport = getSupport();
          // if(isSupport===undefined||isSupport==null){
          //   this.dialogVisible =true;
          //   return;
          // }
          this.loading = true;
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false;
            setCookie("username", this.loginForm.username, 15);
            setCookie("password", this.loginForm.password, 15);
            this.$router.push({path: '/'})
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('参数验证不合法！');
          return false
        }
      })
    },
    handleTry() {
      this.dialogVisible = true
    },
    dialogConfirm() {
      this.dialogVisible = false;
      setSupport(true);
    },
    dialogCancel() {
      this.dialogVisible = false;
      setSupport(false);
    }
  }
}
</script>

<style scoped>
  #body {
    background: url("../../assets/images/login_b.png") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  .login-form-layout {
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    /*width: 360px;*/
    /*margin: 140px auto;*/
    /*border-top: 10px solid #409EFF;*/

    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 25px 28px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login-title {
    text-align: center;
  }

  .login-center-layout {
    /*background: #409EFF;*/
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    /*margin-top: 200px;*/
  }
</style>
