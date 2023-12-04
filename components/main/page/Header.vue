<template>
  <header class="header">
    <div class="header__line">
      {{ title }}
    </div>
    <div class="header__icons main-container">
      <div class="header__title">
        <img src="@/assets/pictures/computer.png" class="header__logo" />
        <h3 class="header__text">Кафедра Математического обеспечения ЭВМ</h3>
      </div>
      <div class="header__buttons">
        <input 
        v-model="value" 
        type="search" 
        autocomplete="off"
        placeholder="Введите"
        class="header__form"
        />
        <IconSearch :style="style('search')" />
        <IconMenu :style="style('menu')" @click="() => openList()" />
      </div>
    </div>
    <div class="header__cards main-container">
      <CategoryCard
        :category="{ title: 'Наука', image: 'https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg', content: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'] }"
        :class="{ 'header__category-card--wide': clicked }"
        :expanded="clicked"
        />
      <CategoryCard
        :category="{ title: 'Образование', image: 'https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg', content: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'] }"
        :class="{ 'header__category-card--wide': clicked }"
        :expanded="clicked"
        />
      <CategoryCard
        :category="{ title: 'Структура', image: 'https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg', content: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'] }"
        :class="{ 'header__category-card--wide': clicked }"
        :expanded="clicked"
        />
      <CategoryCard
        :category="{ title: 'Прочее', image: 'https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg', content: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'] }"
        :class="{ 'header__category-card--wide': clicked }"
        :expanded="clicked"
        />
    </div>
  </header>
</template>
  
<script>
import CategoryCard from '@/components/CategoryCard.vue'
import IconSearch from '@/assets/pictures/search.svg?inline'
import IconMenu from '@/assets/pictures/menu.svg?inline'

export default {
  name: "Header",
  components: {
    CategoryCard,
    IconSearch,
    IconMenu
  },
  data() {
    return {
      clicked: false,
      title: 'Главная'
    };
  },
  props: {
    value: {
      type: String,
      required: false
    }
  },
  methods: {
    style(type) {
      if (this.clicked) {
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
    },
    openList() {
      this.clicked = !this.clicked
      if (this.title === 'Главная') {
        this.title = 'Меню'
        document.body.style.color = '#ebf4f1'
        document.body.style.backgroundColor = '#5e5f61'
        this.$store.commit('globalTempVars/updateTheme', 'gray')
      }
      else {
        this.title = 'Главная'
        document.body.style.color = '#243746'
        document.body.style.backgroundColor = '#f3f5f4'
        this.$store.commit('globalTempVars/updateTheme', 'light')
      }
    }
  }
}
</script>
  
<style lang="less" scoped>
.header {

  &__line {
    font-weight: 700;
    opacity: 1;
    color: #000;
    text-decoration: none;
    background-color: rgb(68, 64, 64);
    height: 20px;
    margin: 0 auto;
    display: flex;
  }

  &__icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    display: flex;
  }

  &__logo {
    max-height: 120px;
  }

  &__form {
    border-style: solid;
    border-color: #ccc;
    border-width: 2px;
    border-bottom: 1;
    border-left: 0;
    border-right: 0;
    border-top: 0;
  }

  &__text {
    padding-left: 20px;
    word-wrap: break-word;
    max-width: 250px;
    vertical-align: middle;
  }

  &__cards {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    gap: 5px;
  }

  &__category-card--wide {
    margin-bottom: -5px;
  }
}
</style>
