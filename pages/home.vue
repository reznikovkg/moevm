<template>
<h2>{{pageTitle}}</h2>
</template>

<script>
export default {
  name: "home",
  head() {
    return { title: "Главная" };
  },
  computed: {
    pageTitle() {
      return this.$options.head().title;
    },
  }
}
</script>

<style scoped>

</style>
