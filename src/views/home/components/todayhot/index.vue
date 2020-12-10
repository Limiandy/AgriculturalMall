<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 19:43:47
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 12:11:46
 -->
<template>
  <div id="todayhot">
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
export default {
  name: 'Todayhot',
  components: {
    comA,
    comB
  },
  data() {
    return {
      tabs: [
        {
          label: '今日爆款',
          name: 'A'
        },
        {
          label: '人气推荐',
          name: 'B'
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
#todayhot {
  background-color: #fff;
  margin-bottom: 22px;
  box-sizing: border-box;
  padding: 22px 17px;
}
.tabs {
  display: flex;
  position: relative;
  margin-bottom: .25rem;
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
