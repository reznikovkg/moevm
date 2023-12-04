<template>
  <div>
    <h2>Список страниц:</h2>
    <ul>
      <li v-for="page in pages" :key="page.name">
        <nuxt-link :to="{ name: page.name }">{{ page.name }}</nuxt-link>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: 'IndexPage',
  computed: {
    pages () {
      return this.$router.options.routes
        .filter((route) => route.path !== "/")
        .map((route) => ({ name: route.name }))
    },
  },
}
</script>
