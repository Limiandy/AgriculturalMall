<!--
 * @Descripttion: APP主页面
 * @version:
 * @Author: Andy
 * @Date: 2020-05-05 19:51:25
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 13:54:56
 -->

<template>
  <div id="home">
    <banner />
    <div class="hot" :style="ferWidth">
      <img :src="require('@/assets/fertilizer.png')">
    </div>
    <navbar />
    <discount />
    <todayhot />
    <hotprodunts />
  </div>
</template>

<script>
import { banner, navbar, discount, todayhot, hotprodunts } from './components'
import ResizeMixin from './mixin/ResizeHandler'
export default {
  name: 'Home',
  components: {
    banner,
    navbar,
    discount,
    todayhot,
    hotprodunts
  },
  mixins: [ResizeMixin],
  data: function() {
    return {
      // ferWidth: '200px'
    }
  },
  computed: {
    devWidth: function() {
      return this.$store.state.app.devWidth
    },
    ferWidth: function() {
      const style = {
        width: `${this.devWidth / 3.4}px`,
        left: `${this.devWidth / 4.7}px`,
        top: `${this.devWidth / 4.5}px`
      }
      return style
    }
  },
  mounted() {
    // this.ferWidth()
  },
  methods: {
    setImgSize: function() {
      return 1
    }
  }
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#home::-webkit-scrollbar {
  width: 0px;
}
.hot {
  position: absolute;
  z-index: 2;
}
.hot img {
  width: 100%;
}

</style>

