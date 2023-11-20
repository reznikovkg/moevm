<template>
    <div v-if="category" class="category-card">
        <div class="category-card__wrapper">
            <!-- <div class="category-card__header">
                <Badge :color="category">{{ category.category }}</Badge>
            </div> -->
            <div class="category-card__content">
                <h3 class="category-card__title">{{ category.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryCard',
    props: {
        category: {
            default: () => (null),
            type: Object
        }
    },
}
</script>

<style lang="less" scoped>
.category-card {
    background: #bababa;
    background-size: cover;
    color: white;
    background-position: center;
    background-image: url('https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg');

    &__wrapper {
        // width: 30px;
        // height: 40px;
    }

    &__content {
        text-align: center;
    }
}
</style>
