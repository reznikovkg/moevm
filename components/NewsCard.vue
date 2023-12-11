<template>
  <div v-if="news" class="news-card">
    <div class="news-card__wrapper">
      <div class="news-card__header">
        <h3 class="news-card__title">
          {{ news.title }}
        </h3>
        <div class="news-card__badge">
          <Badge :color="categoryColor">
            {{ categoryName }}
          </Badge>
          <span class="news-card__datetime">
            {{ formatDate }}
          </span>
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
    categoryName () {
      return 'Новости'
    },
    notFoundImage () {
      return 'https://www.nepalclimbing.com/public/images/no-image.jpg'
    },
    categoryColor () {
      return this.news ? 'red' : ''
    },
    content () {
      return this.news.body
    },
    formatDate () {
      const date = new Date(this.news.dateCreated);
      const datePart = date.toLocaleString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' });
      const timePart = date.toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit' });
      return `${datePart} в ${timePart}`;
    }
  }
}
</script>

<style lang="less" scoped>
.news-card {
  font-family: @ffMontserrat;

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
    margin-top: 10px;
    font-size: small;
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
