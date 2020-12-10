<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 06:37:20
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 20:33:51
 -->
<template>
  <div id="layout">
    <search-bar />
    <app-main />
    <footer-bar />
  </div>
</template>
<script>
import { AppMain, FooterBar, SearchBar } from './components'
export default {
  name: 'Layout',
  components: {
    AppMain,
    FooterBar,
    SearchBar
  },
  computed: {
    hidden() {
      return this.$route.hidden
    }
  },
  mounted() {
    console.log(this.$route.params)
  }
}
</script>

<style scoped>
#layout::-webkit-scrollbar {
  display: none;
}
</style>
