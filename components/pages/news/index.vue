<template>
  <div class="news-page">
    <h2 class="news-page__title">
      {{ pageTitle }}
    </h2>
    <div
    v-for="(item, index) in news"
    :key="index"
    class="news-page__item"
    >
      <nuxt-link :to="`/news/${item.uuid}`" class="news-page__link">
        <ArticleCard
          :article="{ category: categories.NEWS, title: item.title, cover: item.image, date: item.dateCreated }"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ArticleCard, { CATEGORIES } from '@/components/ArticleCard.vue';

export default {
  name: "NewsPage",
  head () {
    return { title: "Новости" };
  },
  computed: {
    pageTitle () {
      return this.$options.head().title
    },
    ...mapGetters('news', {
      news: 'getNews'
    }),
    categories () {
      return CATEGORIES
    }
  }
}
</script>

<style lang="less" scoped>
.news-page {

  &__item {
    margin-bottom: 20px;
  }

  &__link {
    text-decoration: none;
    color: inherit;
  }
}
</style>
