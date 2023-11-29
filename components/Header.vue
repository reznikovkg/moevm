<template>
  <header class="header">
    {{ title }}
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: 'Главная'
    }
  }
  // Layout component code
};
</script>

<style lang="less" scoped ></style>

