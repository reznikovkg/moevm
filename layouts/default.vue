<template>
    <div>
        <HeaderComp class="header" />
        <NavBar class="nav" />
        <Nuxt />
    </div>
</template>

<script>
import HeaderComp from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'default',
    components: {
        NavBar,
        HeaderComp
    }
};
</script>

<style lang="less">
@import "@/assets/color-modes.less";

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

.main-content {
    margin: 20px 90px;
    padding: 0;
}

body {
    margin: 0 !important;
}
</style>

