<template>
  <div v-if="category" class="category-card" :class="{ 'category-card--expanded': expanded }">
    <div class="category-card__wrapper">
      <div class="category-card__header" :style="{ backgroundImage: `url(${category.image})` }">
        <div class="category-card__header__background" />
        <div class="category-card__title">
          {{ category.title }}
        </div>
      </div>

      <Transition name="category-card__content">
        <div v-if="expanded" class="category-card__content">
          <div class="category-card__list">
            <template v-for="(item, index) in category.content">
              <NuxtLink v-if="item.route" :to="item.route" :key="index">
                <div class="category-card__link">{{ item.label }}</div>
              </NuxtLink>
              <div v-else class="category-card__link">{{ item.label }}</div>
            </template>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CategoryCard',
  props: {
    items: {
      default: false,
      type: Boolean
    },
    category: {
      default: () => (null),
      type: Object
    },
    expanded: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="less" scoped>
.category-card {
  width: 100%;
  font-family: @ffMontserrat;

  &__wrapper {

  }

  &__header {
    transition: 0.2s;
    height: 46px;
    text-align: center;
    margin-bottom: 10px;

    background-color: #bababa;
    background-size: cover;
    background-position: center;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    cursor: pointer;

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(124, 130, 131, 0.35);
    }

    &:hover {

      .category-card__title {
        font-size: 26px;
      }
    }
  }

  &__title {
    color: white;
    font-size: 22px;
    font-weight: 700;
    z-index: 1;
    transition: 0.2s;
  }

  &__content {
    height: 0;
    transition: 0.2s;


    &-enter-active, &-leave-active {
      transition: opacity .5s;
    }
    &-enter, &-leave-to {
      opacity: 0;
    }
  }

  &__link {
    padding-top: 5px;
    color: white;
    text-decoration: none;
    font-weight: 500;
    opacity: 0.75;

    &:hover {
      opacity: 1;
    }
  }

  &--expanded {

  }


  &--expanded & {

    &__header {
      height: 90px;

      &__background {
        background-color: rgba(124, 130, 131, 0.1);
      }
    }

    &__content {
      height: 220px;
    }
  }
}
</style>
