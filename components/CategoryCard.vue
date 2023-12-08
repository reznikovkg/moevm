<template>
  <div v-if="category" class="category-card">
    <div class="category-card__wrapper">
      <div class="category-card__header" :style="style">
        <h3 class=" category-card__title">
          {{ category.title }}
        </h3>
      </div>
      <div class="category-card__content">
        <div class="category-card__list">
          <span v-if="expanded">
            <div v-for="(item, index) in category.content" :key="index">
              <nuxt-link :to="{ name: item }"> {{ item }}</nuxt-link>
            </div>
          </span>
        </div>
      </div>
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
  },
  computed: {
    style() {
      if (!this.category) {
        return {}
      }
      if (this.expanded) {
        return {
          height: '70px',
          backgroundImage: `url(${this.category.image})`
        }
      } else {
        return {
          height: null,
          backgroundImage: `url(${this.category.image})`
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.category-card {

  width: 100%;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__header {
    text-align: center;
    align-items: center;
    background: #bababa;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  &__title {
    margin: 0;
    color: white;
  }
}
</style>
