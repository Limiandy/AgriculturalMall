<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-07 13:22:47
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-09 10:57:20
 -->
<template>
  <ul class="footerbar">
    <li v-for="(item, index) in items" :key="index" class="footerbar-items">
      <router-link
        :to="item.path"
        @mouseenter="onMouseEnter(index)"
        @mouseleave="onMouseLeave(index)"
      >
        <div class="iconbox">
          <i :class="item.iconname" />
        </div>
        <div class="titlebox">
          <span class="label">{{ item.name }}</span>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FooterBar',
  data() {
    return {
      items: [
        {
          name: '首页',
          iconname: 'fa fa-home',
          path: '/home'
        },
        {
          name: '购物车',
          iconname: 'fa fa-shopping-cart',
          path: '/shoppingcart/index'
        },
        {
          name: '订单',
          iconname: 'fa fa-file-text-o fa-flip-vertical',
          path: '/order/index'
        },
        {
          name: '我的',
          iconname: 'fa fa-user',
          path: '/user/index'
        }
      ]
    }
  },
  methods: {
    onMouseEnter: function(index) {
      if (index !== 0) {
        this.$store.dispatch('toggleShowSearchBar', true)
      }
      if (index === 0 && this.index !== 0) {
        this.$store.dispatch('toggleShowSearchBar', false)
      }
    },
    onMouseLeave: function(index) {
      return index
    }
  }
}
</script>

<style scoped>
.footerbar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 0.834rem;
  font-size: 14px;
  background-color: #fff;
  border-top: 1px solid transparent;
  box-shadow: 0 0.084rem 0.084rem 0.084rem rgba(0, 0, 0, 0.2);
  display: flex;
  box-sizing: border-box;
  padding: 0.1rem 0;
}
.footerbar-items {
  width: 25%;
  height: 100%;
  text-align: center;
}
.iconbox {
  font-size: 0.4rem;
}
.titlebox {
  font-size: 0.2rem;
}
a {
  color: #d2d2d2;
}
.router-link-exact-active {
  color: red;
}
.router-link-active {
  color: #5e9845;
}
</style>
