<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 22:19:55
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 16:04:38
 -->
<template>
  <ul class="comA">
    <li v-for="(item,index) in items" :key="index" class="comA-items">
      <div class="comA-items-imgbox">
        <img :src="item.imgSrc" alt="">
      </div>
      <div class="comA-items-desc">
        <h5>{{ item.name }}</h5>
        <div class="price">
          <span>{{ `￥${item.nowprice}` }}</span>
          <span>{{ `￥${item.oriprice}` }}</span>
        </div>
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
          name: '通用颗粒控释绿植通用型',
          nowprice: 119.90,
          oriprice: 229.00,
          imgSrc: require('@/assets/hotprodunts/yingyangkeli.png')
        },
        {
          name: '通用颗粒控释绿植通用型',
          nowprice: 119.90,
          oriprice: 229.00,
          imgSrc: require('@/assets/hotprodunts/yingyangkeli.png')
        },
        {
          name: '通用颗粒控释绿植通用型',
          nowprice: 119.90,
          oriprice: 229.00,
          imgSrc: require('@/assets/hotprodunts/yingyangkeli.png')
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
  flex-wrap: wrap;
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
}
.comA-items {
  width: 2.7rem;
  display: block;
  text-align: center;
  height: 3.9rem;
  background-color: #fff;
  border: 1px solid #ededed;
  border-radius: .1rem;
  margin-bottom: .3rem;
  box-sizing: border-box;
  overflow: hidden;
}
.comA-items-imgbox {
  position: relative;
  box-sizing: border-box;
  width: 2.7rem;
  height: 2.65rem;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
}
.comA-items-imgbox::before {
  position: absolute;
  top: .3rem;
  right: .3rem;
  content: "";
  display: block;
  background: url(./../../../../assets/hotprodunts/tenpercentoff.png) no-repeat;
  background-size: 100%;
  width: .6rem;
  height: .6rem;
}
.comA-items-imgbox img {
  width: 100%;
}
.comA-items-desc {
  height: .925rem;
  font-size: .2rem;
}
.comA-items-desc h5 {
  display: block;
  margin: 0;
  margin-top: .2rem;
  margin-bottom: .12rem;
  padding: 0;
  text-align: center;
  font-size: .2rem;
}
.price {
  overflow: hidden;
}
.price span {
  display: block;
  font-size: .2rem;
}
.price span:nth-child(1) {
  float: left;
  margin-left: .05rem;
  color: red;
}
.price span:nth-child(2) {
  float: right;
  margin-right: .05rem;
  text-decoration: line-through;
  color: #a8a8a8;
}

</style>
