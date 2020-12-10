<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-05 16:24:08
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-08 00:12:08
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeMount() {
    window.addEventListener('resize', this.recalc, false)
    document.addEventListener('DOMContentLoaded', this.recalc, false)
  },
  mounted() {
    this.recalc()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.recalc)
    document.removeEventListener('resize', this.recalc)
  },
  methods: {
    recalc: function() {
      const h = document.getElementsByTagName('html')[0]
      // 实际宽度，屏幕可视区域
      const w = document.documentElement.clientWidth
      console.log(w)
      // 设计宽度
      const d = 375
      // 动态设置根节点	fontsize
      if (w >= 640) {
        h.style.fontSize = '120px'
      } else {
        h.style.fontSize = `${w / d * 61}px`
      }
      console.log(h.style.fontSize)
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app::-webkit-scrollbar {
  display: none;
}
</style>
