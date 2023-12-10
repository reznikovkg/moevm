<template>
  <div v-if="news" class="news-card">
    <div class="news-card__wrapper">
      <div class="news-card__header">
        <h3 class="news-card__title">
          {{ news.title }}
        </h3>
        <div class="news-card__badge">
          <span class="news-card__datetime">
            {{ news.dateCreated }}
          </span>
          <Badge :color="categoryColor">
            {{ categoryName }}
          </Badge>
        </div>
        <img :src="imageUrl" class="news-card__image" />
      </div>
      <div class="news-card__content">
        <p v-html="content" class="news-card__body" />
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '@/components/Badge.vue';

export default {
  name: "NewsCard",
  components: {
    Badge
  },
  props: {
    news: {
      default: () => (null),
      type: Object
    }
  },
  data () {
    return {
      categoryName: 'Новости',
      notFoundImage: 'https://www.nepalclimbing.com/public/images/no-image.jpg'
    };
  },
  computed: {
    imageUrl () {
      if (!this.news) {
        return {}
      }
      if (!this.news.image) {
        return this.notFoundImage
      }
      return this.news.image
    },
    categoryColor () {
      return this.news ? 'red' : ''
    },
    content () {
      return this.news.body
    }
  }
}
</script>

<style lang="less" scoped>
@import (css) url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');

.news-card {
  box-shadow: 4px 4px 10px 0px #d5d5d5;
  background-size: cover;
  background-position: center;
  font-family: 'Montserrat', sans-serif;

  &__wrapper {
    padding: 18px 22px;
  }

  &__header {
    display: flex;
    flex-direction: column;
  }

  &__badge {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: baseline;
  }

  &__datetime {
    font-weight: 700;
  }

  &__image{
    margin-top: 10px;
    max-height: 500px;
    width: 100%;
  }

  &__content {
    margin-top: 30px;
  }

  &__title {
    margin: 0;
    font-weight: 700;
    font-size: 22px;
  }
}
</style>
