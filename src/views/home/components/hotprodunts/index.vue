<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 19:43:47
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 12:05:36
 -->
<template>
  <div id="hotprodunts">
    <ul class="tabs">
      <li v-for="(item, index) in tabs" :key="index" class="tabs-item">
        <a
          class="tabs-btn"
          :class="{ active: index === isActive }"
          @mouseenter="onMouseEnter(index)"
          @mouseleave="onMouseLeave"
          @click="handleChangView(item.name)"
        >{{ item.label }}</a>
      </li>
    </ul>
    <component :is="currentView" />
  </div>
</template>

<script>
import comA from './comA'
import comB from './comB'
import comC from './comC'
export default {
  name: 'Discrount',
  components: {
    comA,
    comB,
    comC
  },
  data() {
    return {
      tabs: [
        {
          label: '热卖商品',
          name: 'A'
        },
        {
          label: '每日新品',
          name: 'B'
        },
        {
          label: '物价活动',
          name: 'C'
        }
      ],
      currentView: 'comA',
      isActive: 0
    }
  },
  methods: {
    handleChangView: function(component) {
      this.currentView = 'com' + component
    },
    onMouseEnter(index) {
      this.isActive = index
    },
    onMouseLeave() {
      this.isActive = 0
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
#hotprodunts {
  background-color: #fff;
  margin-bottom: .183rem;
  box-sizing: border-box;
  padding: 22px 17px;
}
.tabs {
  display: flex;
  position: relative;
  margin-bottom: .35rem;
}
.tabs-item {
  margin-right: 15px;
  font-size: 0.2rem;
  color: #b4b4b4;
}
.tabs-btn {
  color: #b4b4b4;
}
.active {
  font-size: 0.23rem;
  color: #000;
  position: relative;
}
.active::before {
  content: "";
  position: absolute;
  left: .2rem;
  bottom: -.1rem;
  border: 1px solid transparent;
  width: .4rem;
  height: .015rem;
  background-color: #fcd300;
}
</style>
