<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-07 16:07:20
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 20:48:31
 -->
<template>
  <div class="search-bar" :class="{hidden: ishidden}">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs>
        <pattern
          id="avatar"
          width="100%"
          height="100%"
          patternContentUnits="objectBoundingBox"
        >
          <image
            width="1"
            height="1"
            xlink:href="./../../assets/searchbaruser.png"
          />
        </pattern>
      </defs>
      <g>
        <circle
          cx=".3rem"
          cy="0.3rem"
          r="0.3rem"
          fill="#00000"
          fill-opacity="0.4"
        />
        <circle cx=".3rem" cy="0.3rem" r="0.2rem" fill="url(#avatar)" />
      </g>
    </svg>
    <div class="search-group">
      <div class="search-icon">
        <img src="./../../assets/searchicon.png">
      </div>
      <div class="input-group">
        <input
          id="search-ctrl"
          type="search"
          name="search"
          placeholder="请输入商品名称"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  computed: {
    ishidden() {
      return this.$store.state.app.showSearchBar
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.search-bar {
  position: fixed;
  z-index: 9999;
  background-color: transparent;
  width: 100%;
  padding: 0 0.147rem;
  display: flex;
  box-sizing: border-box;
}
svg {
  width: 0.9rem;
  height: 0.7rem;
}
.search-group {
  height: 0.6rem;
  flex-basis: 100%;
  background-color: #000;
  opacity: 0.4;
  border: 1px solid transparent;
  border-radius: 0.3rem;
  font-size: 0.18rem;
  padding-left: 0.13rem;
  display: table / block;
  box-sizing: border-box;
}
.search-icon {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 0.6rem;
  height: 0.6rem;
}
.search-icon img {
  width: .3rem;
}
.input-group {
  /* background-color: red; */
  display: table-cell;
  vertical-align: middle;
  height: .6rem;
}
#search-ctrl {
  width: 95%;
  background-color: transparent;
  height: .35rem;
  border: none;
  color: #fff;
  font-size: .2rem;
}
#search-ctrl:focus {
  outline: none;
}
#search-ctrl::placeholder {
  color: #fff;
}
.hidden {
  display: none;
}
</style>
