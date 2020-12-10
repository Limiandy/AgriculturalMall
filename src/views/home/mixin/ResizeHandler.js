/*
 * @Descripttion: 计算设备尺寸
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 11:41:36
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-06 15:26:36
 */
import store from '@/store'

const { body } = document

export default {
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler, false)
  },
  beforDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    this.$_resizeHandler()
  },
  methods: {
    $_devWidth: function() {
      const rect = body.getBoundingClientRect()
      return rect.width
    },
    $_resizeHandler: function() {
      const devWidth = this.$_devWidth()
      store.dispatch('toggleDevWidth', devWidth)
    }
  }
}
