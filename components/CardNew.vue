<template>
  <div v-if="obj" class="card-new" :style="style">
    <div class="card-new__wrapper">
      <div class="card-new__header">
        <span class="card-new__datetime">{{ obj.date }}</span>
        <Badge :color="category">{{ obj.category }}</Badge> 
      </div>
      <div class="card-new__content">
        <h3 class="card-new__title">{{ obj.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue';

export default {
  name: 'CardNew',
  components: {
    Badge
  },
  props: {
    obj: {
      default: () => (null),
      type: Object
    }
  },
  computed: {
    style () {
      return {
        backgroundImage: `url(${this.obj.cover || ''})`
      }
    },
    category () {
      switch (this.obj.category) {
        case 'Объявления':
          return '#0058d8'
        case 'Новости':
          return 'red'
        default:
          break;
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import (css) url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');

.card-new {
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
    margin-top: 110px;
  }

  &__title {
    margin: 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 22px;
  }
}
</style>