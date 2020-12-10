<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 06:45:50
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 20:41:51
 -->
<template>
  <section id="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
#app-main {
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
