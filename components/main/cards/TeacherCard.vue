<template>
  <div v-if="teacher" class="teacher-card" :style="style">
    <div class="teacher-card__wrapper">
      <div class="teacher-card__header">
        <span class="teacher-card__datetime">{{ teacher.date }}</span>
      </div>
      <div class="teacher-card__content">
        <h3 class="teacher-card__title">{{ teacher.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '@/components/Badge.vue';

export default {
  name: 'TeacherCard',
  components: {
    Badge
  },
  props: {
    teacher: {
      default: () => (null),
      type: Object
    }
  },
  computed: {
    style () {
      if (!this.teacher || !this.teacher.cover) {
        return {}
      }

      return {
        backgroundImage: `url(${this.teacher.cover})`
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import (css) url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');

.teacher-card {
  box-shadow: 4px 4px 10px 0px #d5d5d5;
  background: #bababa;
  background-size: cover;
  background-position: center;
  font-family: 'Montserrat', sans-serif;

  &__wrapper {
    background: rgba(0, 0, 0, 0.25);
    padding: 18px 22px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__datetime {
    color: #ffffff;
    font-weight: 700;
  }

  &__content {
    margin-top: 170px;
  }

  &__title {
    margin: 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 22px;
  }
}
</style>
