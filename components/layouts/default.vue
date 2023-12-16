<template>
  <div class="layout">
    <Header  />
    <div class="main__wrapper">
      <main class="main-container">
        <Nuxt />
      </main>
    </div>
    <Footer />
    <div class="background" />
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
  },
  head () {
    return {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js',
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js',
        }
      ]
    }
  },
  mounted () {
    // FOR PROD
    this.buildBackground()
  },
  methods: {
    buildBackground () {
      // VANTA.WAVES({
      //   el: ".background",
      //   mouseControls: true,
      //   touchControls: true,
      //   gyroControls: false,
      //   minHeight: 200.00,
      //   minWidth: 200.00,
      //   scale: 1.00,
      //   scaleMobile: 1.00,
      //   color: 0xa7d3e6
      // })
    }
  },
}
</script>

<style lang="less" scoped>
.layout {
  position: relative;

  .background {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
}
</style>
