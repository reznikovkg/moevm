<template>
  <div>
    <Header  />
    <div class="main__wrapper">
      <main class="main-container">
        <Nuxt />
        <ModalContainer />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components//main/page/Header.vue';
import Footer from '@/components/main/page/Footer.vue';
import ModalContainer from "@/components/parts/ModalContainer";

export default {
  name: 'DefaultLayout',
  components: {
    Footer,
    Header,
    ModalContainer
  }
}
</script>

<style lang="less" scoped>

</style>
