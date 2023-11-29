<template>
    <div v-if="category" class="category-card" @click="openList()"
        :style="{ 'background-blend-mode': clicked ? 'lighten' : 'normal' }">
        <div class="category-card__wrapper">
            <div class="category-card__header" :style="{ height: expanded ? '70px' : null }">
                <h3 class=" category-card__title">{{ category.title }}</h3>
            </div>
            <div class="category-card__content">
                <div class="category-card__list">
                    <span v-if="clicked">
                        <li v-for="(item, index) in mockData" :key="index">
                            {{ item }}
                        </li>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryCard',
    data() {
        return {
            clicked: false,
            mockData: [
                "Пункт 1",
                "Пункт 2",
                "Пункт 3",
                "Пункт 4",
                "Пункт 5"
            ]
        }
    },
    methods: {
        openList() {
            this.clicked = !this.clicked
            if (this.$colorMode.preference === 'gray') {
                this.$colorMode.preference = 'light'
            } else {
                this.$colorMode.preference = 'gray'
            }
        }
    },
    props: {
        category: {
            default: () => (null),
            type: Object
        },
        expanded: {
            default: false,
            type: Boolean
        }
    },
}
</script>

<style lang="less" scoped>
.category-card {

    width: 100%;

    &__wrapper {
        display: flex;
        flex-direction: column;
    }

    &__header {
        text-align: center;
        align-items: center;
        background: #bababa;
        background-size: cover;
        background-position: center;
        background-image: url('https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg');
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }

    // &__list {}

    // &__content {
    //     // text-align: center;
    // }

    &__title {
        margin: 0;
        color: white;
    }
}
</style>
