<template>
  <h2>{{pageTitle}}</h2>
</template>

<script>
export default {
  name: "teacher",
  head() {
    return { title: "Преподователь" };
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
