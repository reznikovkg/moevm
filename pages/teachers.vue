<template>
  <h2>{{pageTitle}}</h2>
</template>

<script>
export default {
  name: "TeachersPage",
  head () {
    return { title: "Преподователи" }
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
