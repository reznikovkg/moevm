<template>
  <div v-if="article" class="news-card">
    <h2 class="news-card__title">
      {{ article.title }}
    </h2>
    <div class="news-card__info">
      <div v-if="article.category">
        <Badge
          v-for="(c, index) in article.category"
          :key="index"
          :color="c.color"
        >{{ c.name }}</Badge>
      </div>
      <span v-if="article.date" class="news-card__datetime">
        {{ formatDate }}
      </span>
    </div>
    <img :src="imageUrl" class="news-card__image" />
    <div class="news-card__content" v-html="content" />
  </div>
</template>

<script>
import Badge from '@/components/Badge.vue';

export default {
  name: "FullArticleCard",
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
    imageUrl () {
      if (!this.article) {
        return {}
      }
      if (!this.article.cover) {
        return this.notFoundImage
      }
      return this.article.cover
    },
    notFoundImage () {
      return 'https://www.nepalclimbing.com/public/images/no-image.jpg'
    },
    content () {
      return this.article.body
    },
    formatDate () {
      const date = new Date(this.article.dateCreated);
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

  &__title {
    margin-top: 0;
  }

  &__info {
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

  &__image {
    margin-top: 10px;
    width: 100%;
  }

  &__content {
    margin-top: 30px;
  }
}
</style>
