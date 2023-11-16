<template>
  <div>
    <header>
      ...
    </header>
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

export default {
  name: 'DefaultLayout',
  components: {
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
