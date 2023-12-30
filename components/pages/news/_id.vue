<template>
  <div>
    <FullArticleCard :article="article" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FullArticleCard from '@/components/main/cards/FullArticleCard.vue';

export default {
  name: "FullArticlePage",
  components: {
    FullArticleCard
  },
  computed: {
    ...mapGetters('news', [
      'getNewsById'
    ]),
    article () {
      return this.getNewsById(this.$route.params.id);
    }
  }
};
</script>
