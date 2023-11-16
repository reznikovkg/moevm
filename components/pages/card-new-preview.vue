<template>
  <div>
    <ArticleCard :article="{ category: categories.ADVS, title: 'Скоро собрание кафедры', date: '01.09.2023 в 12:00' }" />
    <br>
    <ArticleCard :article="{ category: categories.NEWS, title: 'Открылся музей', cover: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg', date: '01.09.2023 в 13:00' }" />
  </div>
</template>

<script>
import ArticleCard, { CATEGORIES } from '@/components/ArticleCard.vue';

export default {
  name: 'CardNewPreviewPage',
  components: {
    ArticleCard
  },
  computed: {
    categories () {
      return CATEGORIES
    }
  }
}
</script>

<style>

</style>
