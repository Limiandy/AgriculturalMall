<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 06:58:55
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 18:09:23
 -->
<template>
  <div class="banner">
    <el-carousel :height="bannerHeight" :interval="5000" arrow="never">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item" @load="imgLoad">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data: () => {
    return {
      imgs: [],
      bannerHeight: '',
      imgProportion: 1.63
    }
  },
  computed: {
    devWidth() {
      return this.$store.state.app.devWidth
    }
  },
  beforeMount: function() {
    this.setImgPath()
    this.imgLoad()
    window.addEventListener('resize', this.imgLoad)
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.imgLoad)
  },
  mounted: function() {
    this.imgLoad()
  },
  methods: {
    setImgPath: function() {
      for (let i = 1; i <= 4; i++) {
        this.imgs.push(require(`@/assets/banner/banner${i}.png`))
      }
    },
    imgLoad: function() {
      this.bannerHeight = `${this.devWidth / 1.63}px`
    }
  }
}
</script>

<style scoped>
.el-carousel__item img {
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
