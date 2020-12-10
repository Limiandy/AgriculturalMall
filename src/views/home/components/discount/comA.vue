<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 22:19:55
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 10:37:17
 -->
<template>
  <ul class="comA">
    <li v-for="(item,index) in items" :key="index" class="comA-items">
      <div class="comA-items-imgbox">
        <img :src="item.imgSrc" alt="">
      </div>
      <div class="comA-items-desc">
        <h5>{{ item.name }}</h5>
        <span>{{ `￥${item.price}` }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ComA',
  data() {
    return {
      items: [
        {
          name: '硝基缓释肥料40g',
          price: 119.90,
          imgSrc: require('@/assets/guihu.png')
        },
        {
          name: '硝基缓释肥料40g',
          price: 119.90,
          imgSrc: require('@/assets/guihu.png')
        },
        {
          name: '硝基缓释肥料40g',
          price: 119.90,
          imgSrc: require('@/assets/guihu.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.comA {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2.65rem;
  background-color: transparent;
  box-sizing: border-box;
  overflow: hidden;
}
.comA-items {
  width: 1.8rem;
  display: block;
  height: 100%;
  background-color: #fff;
}
.comA-items-imgbox {
  position: relative;
  box-sizing: border-box;
  height: 1.97rme;
}
.comA-items-imgbox::before {
  position: absolute;
  content: "特惠进行";
  font-size: .2rem;
  background: linear-gradient(#ffc800, #ffa900);
  width: .903rem;
  height: .365rem;
  color: #fff;
  line-height: .365rem;
  text-align: center;
  padding: .02rem;
  border: 1px solid transparent;
  border-bottom-right-radius: .15rem;
}
.comA-items-imgbox img {
  width: 1.34rem;
  height: 1.15rem;
  margin-top: .53rem;
  margin-left: .428rem;
}
.comA-items-desc {
  height: .68rem;
  font-size: .2rem;
}
.comA-items-desc h5 {
  margin: 0;
  margin-bottom: .12rem;
  padding: 0;
  padding-left: .13rem;
  font-size: .2rem;
}
.comA-items-desc span {
  display: inline-block;
  margin-left: .13rem;
  color: red;
  font-size: .2rem;
}
</style>
