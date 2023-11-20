<template>
  <div class="main-content">
    <h2>Список страниц:</h2>
    <ul>
      <li v-for="page in pages" :key="page.name">
        <nuxt-link :to="{ name: page.name }">{{ page.name }}</nuxt-link>
      </li>
    </ul>
  </div>
  <!-- <div>
    <h2>Список страниц:</h2>
    <ul>
      <li v-for="page in pages" :key="page.name">
        <nuxt-link :to="{ name: page.name }">{{ page.name }}</nuxt-link>
      </li>
    </ul> -->
  <!-- <HeaderComp /> -->
  <!-- <nuxt-link to="/card-new-preview">Card</nuxt-link> -->
</template>

<script>
// import HeaderComp from '../components/Header.vue';
// import NavBar from '../components/NavBar.vue';
// import baseLayout from '../layouts/default.vue';
export default {
  name: 'IndexPage',
  components: {
    // HeaderComp,
    // NavBar,
    // baseLayout
  },
  computed: {
    pages() {
      return this.$router.options.routes
        .filter((route) => route.path !== "/")
        .map((route) => ({ name: route.name }))
    },
  },
}
</script>
