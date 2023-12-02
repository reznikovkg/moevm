<template>
  <header class="header">
    <div class="top">
      {{ title }}
    </div>
    <div class="middle main-container">
      <div class="title">
        <img src="@/assets/pictures/computer.png" class="logo" />
        <h3>Кафедра Математического обеспечения ЭВМ </h3>
      </div>
      <div class="icons">
        <input v-model="value" type="search" autocomplete="off" placeholder="Введите" class="form" />
        <IconSearch :style="style('search')" />
        <IconMenu :style="style('menu')" />
      </div>
    </div>
    <div class="lower main-container" :class="{ wide: clicked }" @click="OpenList">
      <CategoryCard :category="{ title: 'Наука' }" :class="{ wide: clicked }" :expanded=this.clicked />
      <CategoryCard :category="{ title: 'Образование' }" :class="{ wide: clicked }" :expanded=this.clicked />
      <CategoryCard :category="{ title: 'Структура' }" :class="{ wide: clicked }" :expanded=this.clicked />
      <CategoryCard :category="{ title: 'Прочее' }" :class="{ wide: clicked }" :expanded=this.clicked />
    </div>
  </header>
</template>
  
<script>
import CategoryCard from '@/components/CategoryCard.vue'
import IconSearch from '@/assets/pictures/search.svg?inline'
import IconMenu from '@/assets/pictures/menu.svg?inline'

export default {
  name: "NavigationBar",
  props: {
    value: {
      type: String,
      required: false
    }
  },
  methods: {
    OpenList() {
      this.clicked = !this.clicked;
      if (this.title === 'Главная') {
        this.title = 'Меню'
      }
      else {
        this.title = 'Главная'
      }
    },
    style(type) {
      if (this.$colorMode.value === 'gray') {
        if (type === 'menu') {
          return { fill: 'white' }
        }
        else {
          return { stroke: 'white' }
        }
      }
      else {
        if (type === 'menu') {
          return { fill: 'black' }
        }
        else {
          return { stroke: 'black' }
        }
      }
    }
  },
  data() {
    return {
      clicked: false,
      title: 'Главная'
    };
  },
  components: {
    CategoryCard,
    IconSearch,
    IconMenu
  }
}
</script>
  
<style lang="less" scoped>
.logo {
  max-height: 120px;
}

.form {
  border-style: solid;
  /* Установка нужной линии */
  border-color: #ccc;
  /* Цвет линии */
  border-width: 2px;
  border-bottom: 1;
  border-left: 0;
  border-right: 0;
  border-top: 0;
}

.top {
  font-weight: 700;
  opacity: 1;
  color: #000;
  text-decoration: none;
  background-color: rgb(68, 64, 64);
  height: 20px;
  margin: 0 auto;
  display: flex;
}

.wide {
  margin-bottom: -5px;
}

.lower {
  // margin: 0 auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 5px;
}

.middle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 90px;
  padding: 0;
}

.title {
  display: flex;
}

h3 {
  padding-left: 20px;
  word-wrap: break-word;
  max-width: 250px;
  vertical-align: middle;
}
</style>
  
  