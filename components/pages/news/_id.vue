<template>
  <div>
    <NewsCard :news="news" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsCard from '@/components/NewsCard.vue';

export default {
  name: "OneNewsPage",
  components:{
    NewsCard
  },
  computed: {
    ...mapGetters('news', {
      getNewsByUuid: 'getNewsByUuid'
    }),
    news () {
      return this.getNewsByUuid(this.$route.params.id);
    }
  }
};
</script>
