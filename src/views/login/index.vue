<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-07 23:19:44
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-08 03:43:23
 -->
<template>
  <div class="login-container">
    <header>
      <img src="./../../assets/titlebg.png">
    </header>
    <div class="from-container">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <el-form-item prop="username">
          <span class="svg-container">
            <img src="./../../assets/login/user.png">
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <img src="./../../assets/login/password.png">
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <i class="fa fa-eye" />
          </span>
        </el-form-item>
        <div class="button-group">
          <el-button
            :loading="loading"
            type="primary"
            @click.native.prevent="handleLogin"
          >登录</el-button>
          <el-button
            :loading="loading"
            type="primary"
            @click.native.prevent="handleSignUp"
          >注册</el-button>
        </div>

        <div class="tips">
          <span style="margin-right:20px;">username: admin</span>
          <span> password: any</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入正确密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
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
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleSignUp: function() {
      this.$router.push({ path: '/sign/index' })
    }
  }
}
</script>

<style lang="scss">

$bg: #283443;
$light_gray: #999;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
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

.login-container {
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
    .login-form {
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
          width: 40%;
          font-size: .2rem;
          &:first-child {
            background-color: #6dbc2e;
          }
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
