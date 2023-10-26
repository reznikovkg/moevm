<template>
  <div :style="style" class="badge">
    <slot>Объявления</slot>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    color: {
      type: String,
      default: '#0000FF'
    }
  },
  computed: {
    style () {
      return {
        background: this.color
      }
    }
  }
}
</script>

<style lang="less" scoped>
.badge {
  display: inline-block;
  padding: 4px 8px;
  color: #FFFFFF;
  font-weight: 700;
}
</style>
