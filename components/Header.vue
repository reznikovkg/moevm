<template>
  <div>
    <div class="wrapper">
      <header class="header">
        <div class="locationTitle">
          Главная
        </div>
        <div class="logo">
        </div>
      </header>
    </div>
    <div class="navLine">
      <img src="../assets/computer.png" class="logo" />
      Кафедра Математического обеспечения ЭВМ
      <img src="../assets/search-alt-svgrepo-com.svg" class="items" />
    </div>
    <!-- <main>
          <nuxt />
      </main> -->

  </div>
</template>

<script>
export default {
  // Layout component code
};
</script>

<style lang="less" >
@import "../assets/global-variables.less";

// .wrapper {
//   background-color: @basic-bg-color;
//   height: 20px;
// }

.header {
  background-color: @basic-bg-color;
  height: 20px;
  .globalMixinWrapper();
  display: flex;
}

.navLine {
  display: inline-block;
  max-height: 100px;
  margin: 0 auto;
  padding: 0 auto;
}

.logo {
  max-height: 50px;
}

.items {
  max-height: 20px;
}

.locationTitle {
  // font-size: 2.2em;
  font-weight: 700;
  opacity: 1;
  color: #000;
  text-decoration: none;
}



body {
  margin: 0 !important;
}
</style>

