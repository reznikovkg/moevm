<template>
  <h2>{{pageTitle}}</h2>
</template>

<script>
export default {
  name: "news",
  head() {
    return { title: "Новости" };
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
