<template>
    <div>
        <!-- <header> -->
        <!-- <slot name="header" class="header-slot"> -->
        <TheHeader class="header" />
        <!-- </slot> -->
        <!-- <slot name=" nav" class="nav-slot"> -->
        <NavBar class="nav" />
        <!-- </slot> -->
        <!-- </header> -->
        <Nuxt />
        <!-- <main class="main-slot"> -->
        <!-- <slot name="body"></slot> -->
        <!-- </main> -->
        <!-- <footer class="footer-slot"> -->
        <!-- <slot name="footer"></slot> -->
        <!-- </footer> -->
    </div>
</template>

<script>
import TheHeader from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'default',
    components: {
        NavBar,
        TheHeader
    }
};
</script>

<style lang="less">
@import "../assets/global-variables.less";

.header {
    // font-size: 2.2em;
    font-weight: 700;
    opacity: 1;
    color: #000;
    text-decoration: none;
    background-color: @basic-bg-color;
    height: 20px;
    .globalMixinWrapper();
    display: flex;
}

.nav {
    // display: flex;
    // max-height: 100px;
    margin: 0 90px;
    padding: 0;
    // justify-content: space-between;
    // align-items: center;
}


.main-content {
    margin: 20px 90px;
    padding: 0;
}

body {
    margin: 0 !important;
}
</style>
