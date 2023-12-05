<template>
  <Page>
    <h2>{{pageTitle}}</h2>

    <div class="teachers__grid">
      <TeacherCard v-for="i in teachers" :key="i.code" :teacher="i" />
    </div>
  </Page>
</template>

<script>
import TeacherCard from "@/components/main/cards/TeacherCard"

export default {
  name: "TeachersPage",
  components: {
    TeacherCard
  },
  head () {
    return { title: "Преподователи" }
  },
  computed: {
    pageTitle () {
      return this.$options.head().title
    },
    teachers () {
      return [
        {
          code: 'chupandina',
          name: 'Чупандина Елена Евгеньевна',
          cover: 'http://www.pharm.vsu.ru/pict/chupandina.jpg'
        },
        {
          code: 'trineeva',
          name: 'Тринеева Ольга Валерьевна',
          cover: 'http://www.pharm.vsu.ru/pict/chupandina.jpg'
        },
        {
          code: 'zhuravleva',
          name: 'Журавлёва Татьяна Игоревна',
          cover: 'http://www.pharm.vsu.ru/pict/chupandina.jpg'
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">
.teachers {
  &__grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
  }
}
</style>
