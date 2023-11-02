<template>
  <h2>{{pageTitle}}</h2>
</template>

<script>
export default {
  name: "NewsPage",
  head () {
    return { title: "Новости" };
  },
  computed: {
    pageTitle () {
      return this.$options.head().title
    },
  }
}
</script>

<style scoped>

</style>
