<template>
  <div v-if="article" class="article-card" :style="style">
    <div class="article-card__wrapper">
      <div class="article-card__header">
        <span v-if="article.date" class="article-card__datetime">{{ article.date }}</span>
        <div v-if="article.category">
          <Badge
            v-for="(c, index) in article.category"
            :key="index"
            :color="c.color"
          >{{ c.name }}</Badge>
        </div>
      </div>
      <div class="article-card__content">
        <h3 class="article-card__title">{{ article.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '@/components/Badge.vue';

export const CATEGORIES = {
  ADVS: 'Объявления',
  NEWS: 'Новости',
}

export default {
  name: 'ArticleCard',
  components: {
    Badge
  },
  props: {
    article: {
      default: () => (null),
      type: Object
    }
  },
  computed: {
    style () {
      if (!this.article || !this.article.cover) {
        return {}
      }

      return {
        backgroundImage: `url(${this.article.cover})`
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import (css) url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');

.article-card {
  box-shadow: 4px 4px 10px 0px #d5d5d5;
  background: #bababa;
  background-size: cover;
  background-position: center;
  font-family: 'Montserrat', sans-serif;

  &__wrapper {
    background: rgba(0, 0, 0, 0.25);
    padding: 18px 22px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__datetime {
    color: #ffffff;
    font-weight: 700;
  }

  &__content {
  }

  &__title {
    margin: 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
