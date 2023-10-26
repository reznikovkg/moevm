<template>
  <div>
    <CardNew :obj="{ category: 'Объявления', title: 'Скоро собрание кафедры', date: '01.09.2023 в 12:00' }" />
    <br>
    <CardNew :obj="{ category: 'Новости', title: 'Открылся музей', cover: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg', date: '01.09.2023 в 13:00' }" />
  </div>
</template>

<script>
import CardNew from '../components/CardNew.vue';

export default {
  name: 'CardNewPreviewPage',
  components: {
    CardNew
  }
}
</script>

<style>

</style>