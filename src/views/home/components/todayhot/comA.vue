<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-07 10:48:12
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 12:10:54
 -->
<template>
  <div class="hot-banner">
    <el-carousel
      class="banner-ctrl"
      :interval="5000"
      height="1.821rem"
      indicator-position="none"
    >
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'ComA',
  data: () => {
    return {
      imgs: []
    }
  },
  beforeMount: function() {
    this.setImgPath()
  },
  methods: {
    setImgPath: function() {
      for (let i = 1; i <= 4; i++) {
        this.imgs.push(require(`@/assets/todayhot/hotbanner${i}.png`))
      }
    }
  }
}
</script>

<style scoped>
.banner-ctrl {
  border: 1px solid transparent;
  border-radius: .11rem;
}
.el-carousel__item img {
  width: 100%;
  position: absolute;
}
</style>
