<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 19:43:47
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 11:58:14
 -->
<template>
  <div id="discount">
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
      <li class="tabs-item more">更多</li>
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
          label: '大健康特惠',
          name: 'A'
        },
        {
          label: '买的实惠',
          name: 'B'
        },
        {
          label: '绿色健康',
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
#discount {
  background-color: #fafafa;
  margin-bottom: .183rem;
  box-sizing: border-box;
  padding: 22px 17px;
}
.tabs {
  display: flex;
  position: relative;
  margin-bottom: .15rem;
}
.more {
  position: absolute;
  right: 0;
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
}
</style>
