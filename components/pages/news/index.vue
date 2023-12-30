<template>
  <Page>
    <div class="news-page">
      <h2 class="news-page__title">
        {{ pageTitle }}
      </h2>
      <div
        v-for="(item, index) in news"
        :key="index"
        class="news-page__item"
      >
        <NuxtLink :to="`/news/${item.uuid}`" class="news-page__link">
          <ArticleCard :article="item" />
        </NuxtLink>
      </div>
    </div>
  </Page>
</template>

<script>
import { mapGetters } from 'vuex';
import ArticleCard, { CATEGORIES } from '@/components/main/cards/ArticleCard.vue';

export default {
  name: "NewsPage",
  components: {
    ArticleCard
  },
  head () {
    return { title: "Новости" };
  },
  computed: {
    ...mapGetters('news', {
      news: 'getNews'
    }),
    pageTitle () {
      return this.$options.head().title
    },
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
