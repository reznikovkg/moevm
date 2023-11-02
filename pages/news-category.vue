<template>
  <h2>{{pageTitle}}</h2>
</template>

<script>
export default {
  name: "NewsCategoryPage",
  head () {
    return { title: "Категории новостей" }
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
