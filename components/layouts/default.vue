<template>
  <div>
    <Header  />
    <div class="main__wrapper">
      <main class="main-container">
        <Nuxt />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components//main/page/Header.vue';
import Footer from '@/components/main/page/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="less" scoped>

</style>
