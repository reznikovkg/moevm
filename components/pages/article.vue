<template>
  <h2>{{pageTitle}}</h2>
</template>

<script>
export default {
  name: "ArticlePage",
  head () {
    return { title: "Новость" }
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
