<template>
  <div>
    <Header class="header" />
    <NavBar class="nav" />
    <div class="main__wrapper">
      <main class="main-container">
        <Nuxt />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/main/page/Footer.vue'
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Footer,
    Header,
    NavBar
  }
}
</script>

<style lang="less" scoped>
.header {
  font-weight: 700;
  opacity: 1;
  color: #000;
  text-decoration: none;
  background-color: rgb(68, 64, 64);
  height: 20px;
  margin: 0 auto;
  display: flex;
}

.nav {
  margin: 0 90px;
  padding: 0;
}
</style>
