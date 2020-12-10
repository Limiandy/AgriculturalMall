<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 15:55:39
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 09:10:37
 -->
<template>
  <div id="navbar">
    <ul class="navbar-item1">
      <li
        v-for="(item, index) in topnavlinks"
        :key="index"
        class="navbar-item1-items"
      >
        <a :href="item.url">
          <div class="imgbox" :style="{backgroundColor: item.bgcolor}">
            <img :src="item.imgSrc">
          </div>
          <div class="link-title">
            <span>{{ item.name }}</span>
          </div>
        </a>
      </li>
    </ul>
    <ul class="navbar-item2">
      <li v-for="(item, index) in bottomnavlinks" :key="index" class="navbar-item2-items">
        <div class="two-navlinks-desc">
          <h5>{{ item.name }}</h5>
          <p>{{ item.desc }}</p>
        </div>
        <div class="two-navlinks-imgbox">
          <img :src="item.imgSrc">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function() {
    return {
      topnavlinks: [
        {
          name: '每日资讯',
          imgSrc: require('@/assets/navbarimgs/msg.png'),
          url: '#',
          bgcolor: 'rgb(255,229,204)'
        },
        {
          name: '全部商品',
          imgSrc: require('@/assets/navbarimgs/shoping.png'),
          url: '#',
          bgcolor: 'rgb(255,224,224)'
        },
        {
          name: '会员专区',
          imgSrc: require('@/assets/navbarimgs/huangguan.png'),
          url: '#',
          bgcolor: 'rgb(224,243,255)'
        },
        {
          name: '积分商城',
          imgSrc: require('@/assets/navbarimgs/gift.png'),
          url: '#',
          bgcolor: 'rgb(232,247,214)'
        },
        {
          name: '公益基金',
          imgSrc: require('@/assets/navbarimgs/monery.png'),
          url: '#',
          bgcolor: 'rgb(255,229,204)'
        }
      ],
      bottomnavlinks: [
        {
          name: '种子',
          desc: '绿色食品',
          imgSrc: require('@/assets/navbarimgs/jinzhonzi.png'),
          url: '#'
        },
        {
          name: '农药',
          desc: '绿色无害',
          imgSrc: require('@/assets/navbarimgs/nongyao.png'),
          url: '#'
        },
        {
          name: '化肥',
          desc: '绿色环保',
          imgSrc: require('@/assets/navbarimgs/guoshujian.png'),
          url: '#'
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
#navbar {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: .32rem 17px .35rem 17px;
  background-color: #fff;
}
.navbar-item1 {
  display: flex;
  justify-content: space-between;
  height: 1.2rem;
  margin-bottom: .35rem;
}
.navbar-item1-items {
  position: relative;
  height: 100%;
  width: .834rem;
  background-color: #fff;
}
.navbar-item1-items a {
  display: block;
  position: relative;
  height: 100%;
}
.navbar-item1-items:nth-child(1)::before {
  content: "最新";
  position: absolute;
  top: -10px;
  right: -30px;
  background-color: rgb(254,88,2);
  border: 3px solid #fff;
  border-radius: 10px 10px 10px 0;
  padding: 5px 10px;
  color: #fff;
  font-family: PingFangSC-Medium;
  font-size: .16rem;
  z-index: 999;
}
.navbar-item1-items:nth-child(3)::before {
  content: "会员";
  position: absolute;
  top: -10px;
  right: -30px;
  background-color: rgb(254,88,2);
  border: 3px solid #fff;
  border-radius: 10px 10px 10px 0;
  padding: 5px 10px;
  color: #fff;
  font-family: PingFangSC-Medium;
  font-size: .16rem;
  z-index: 999;
}
.imgbox {
  width: 100%;
  height:.834rem;
  padding: .1rem;
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
}
.imgbox img {
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translateY(-50%);
  width: .5rem;
}
.link-title {
  position: absolute;
  left: .03rem;
  bottom: -.25rem;
  width: 100%;
}
.link-title span {
  font-family: PingFangSC-Medium;
  font-size: .2rem;
  color: #000;
}
.navbar-item2 {
  display: flex;
  justify-content: space-between;
  height: .625rem;
}
.navbar-item2-items {
  /* position: relative; */
  width: 1.7rem;
  height: 100%;
}
.navbar-item2-items:nth-child(1)::after {
  position: absolute;
  top: .125rem;
  right: -.2rem;
  content: "";
  border: 1px solid rgb(182,182,182);
  height: .375rem;
}
.navbar-item2-items:nth-child(2)::after {
  position: absolute;
  top: .125rem;
  right: -.2rem;
  content: "";
  border: 1px solid rgb(182,182,182);
  height: .375rem;
}
.two-navlinks-desc {
  float: left;
  width: 50%;
}
.two-navlinks-desc h5 {
  margin: 0;
  padding: 0;
  padding-top: 5px;
  font-size: .2rem;
  color: #000;
}
.two-navlinks-desc p {
  font-size: .18rem;
  margin: 0;
  margin-top: .11rem;
  color: rgb(182,182,182);
}
.two-navlinks-imgbox {
  float: right;
  width: 50%;
  height: 100%;
  position: relative;
}
.two-navlinks-imgbox img {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
}
</style>
