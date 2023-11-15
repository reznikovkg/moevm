
<template>
    <div>
        <HeaderComp />
        <nuxt />
    </div>
</template>

<script>
import HeaderComp from '../components/Header.vue';
export default {
    name: 'default',
    components: {
        HeaderComp
    }
};
</script>

<style lang="less" scoped >
.mainContent {
    margin: 0 auto;
    padding: 0 auto;
}
</style>
