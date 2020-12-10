<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-07 23:19:44
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-08 13:39:20
 -->
<template>
  <div class="signup-container">
    <header>
      <img src="./../../assets/titlebg.png">
    </header>
    <div class="from-container">
      <el-form
        ref="signupForm"
        :model="signupForm"
        :rules="signupRules"
        class="signup-form"
        auto-complete="on"
        label-position="left"
      >
        <el-form-item prop="username">
          <span class="svg-container">
            <img src="./../../assets/login/user.png">
          </span>
          <el-input
            ref="username"
            v-model="signupForm.username"
            placeholder="请输入用户姓名"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="off"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <img src="./../../assets/login/password.png">
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="signupForm.password"
            :type="passwordType"
            placeholder="请输入登录密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <i class="fa fa-eye" />
          </span>
        </el-form-item>

        <el-form-item prop="confpassword">
          <span class="svg-container">
            <img src="./../../assets/login/conf.png">
          </span>
          <el-input
            :key="passwordType"
            ref="confpassword"
            v-model="signupForm.confpassword"
            :type="passwordType"
            placeholder="请确认密码"
            name="confpassword"
            tabindex="3"
            auto-complete="off"
          />
        </el-form-item>

        <el-form-item prop="mobile">
          <span class="svg-container">
            <img src="./../../assets/login/mobile.png">
          </span>
          <el-input
            ref="mobile"
            v-model="signupForm.mobile"
            placeholder="请输入手机号"
            name="mobile"
            type="number"
            tabindex="4"
            auto-complete="off"
          />
        </el-form-item>

        <el-form-item prop="vercode">
          <span class="svg-container">
            <img src="./../../assets/login/vercode.png">
          </span>
          <el-input
            ref="vercode"
            v-model="signupForm.vercode"
            placeholder="请输入验证码"
            name="vercode"
            type="number"
            tabindex="5"
            auto-complete="off"
          />
        </el-form-item>

        <div class="button-group">
          <el-button
            :loading="loading"
            type="primary"
            @click.native.prevent="handleSignup"
          >登录/注册</el-button>
        </div>
        <div class="tips">
          <span> {{ signMessage }}</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SignUp',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户姓名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入6位以上密码'))
      } else {
        callback()
      }
    }
    const validateConfPassword = (rule, value, callback) => {
      if (value !== this.$refs.password.value) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    const validateMobile = (rule, value, callback) => {
      const reg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!reg.test(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    const validateVercode = (rule, value, callback) => {
      if (value !== '123456') {
        callback(new Error('验证码不正确'))
      } else {
        callback()
      }
    }
    return {
      signupForm: {
        username: 'user0nw',
        password: '123456',
        confpassword: '123456',
        mobile: '15045428072',
        vercode: '123456'
      },
      signupRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ],
        confpassword: [
          { required: true, trigger: 'blur', validator: validateConfPassword }
        ],
        mobile: [
          { required: true, trigger: 'blur', validator: validateMobile }
        ],
        vercode: [
          { required: true, trigger: 'blur', validator: validateVercode }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      signMessage: ''
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleSignup() {
      this.$refs.signupForm.validate(valid => {
        if (valid) {
          const data = { username: this.signupForm.username, password: this.signupForm.password, mobile: this.signupForm.mobile, vercode: this.signupForm.vercode }
          this.loading = true
          this.$store
            .dispatch('user/signup', data)
            .then(() => {
              this.signMessage = '注册成功,正在跳转到首页'
              setTimeout(() => {
                this.$router.push({ path: this.redirect || '/' })
                this.loading = false
              }, 3 * 1000)
            })
            .catch((error) => {
              this.signMessage = error
              setTimeout(() => {
                this.signMessage = ''
              }, 3 * 1000)
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">

$bg: #283443;
$light_gray: #999;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .signup-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.signup-container {
  .el-form-item {
    border-bottom: 1px solid #999;
    background: #fff;
    color: #999;
    height: 0.7rem;

    .el-form-item__content {
      height: 100%;

      .el-input {
        display: inline-block;
        height: 100%;
        width: 85%;

        input {
          background: transparent;
          border: 0px;
          -webkit-appearance: none;
          border-radius: 0px;
          padding: 0.1rem 0.1rem;
          color: $light_gray;
          height: 100%;
          caret-color: $cursor;
          font-size: 0.3rem;

          &:-webkit-autofill {
            box-shadow: 0 0 0px 1000px $bg inset !important;
            -webkit-text-fill-color: $cursor !important;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
$bg: #fff;
$dark_gray: #889aa4;
$light_gray: #eee;

.signup-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  header {
    margin: 0;
    padding: 0;
    height: 3.51rem;
    width: 100%;
    img {
      width: 100%;
    }
  }

  .from-container {
    .signup-form {
      position: relative;
      width: 4.34rem;
      padding: 0.3rem 0.3rem 0;
      margin: 0 auto;
      overflow: hidden;

      .svg-container {
        // padding: .05rem .042rem .05rem .125rem;
        color: $dark_gray;
        vertical-align: middle;
        width: .3rem;
        display: inline-block;

        img {
          width: .3rem;
        }
      }

      .show-pwd {
        position: absolute;
        right: .083rem;
        top: .12rem;
        font-size: 0.25rem;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
      }

      .button-group {
        margin-top: .35rem;
        margin-bottom: .35rem;
        display: flex;
        justify-content: space-between;
        .el-button {
          width: 100%;
          font-size: .2rem;
          background-color: #6dbc2e;
          border-radius: 1rem;
        }
      }
    }
    .tips {
      font-size: 0.2rem;
      color: #999;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
  }
}
</style>
