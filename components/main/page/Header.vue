<template>
  <header class="header" :style="styleHeader">
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
        <SearchIcon :color="styleIcon" />
        <MenuIcon :color="styleIcon" @click.native ="() => openList()" />
      </div>
    </div>
    <div class="header__cards main-container">
      <CategoryCard
        :category="{ title: 'Наука', image: 'https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg', content: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'] }"
        :expanded="clicked"
        />
      <CategoryCard
        :category="{ title: 'Образование', image: 'https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg', content: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'] }"
        :expanded="clicked"
        />
      <CategoryCard
        :category="{ title: 'Структура', image: 'https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg', content: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'] }"
        :expanded="clicked"
        />
      <CategoryCard
        :category="{ title: 'Прочее', image: 'https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg', content: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'] }"
        :expanded="clicked"
        />
    </div>
  </header>
</template>
  
<script>
import CategoryCard from '@/components/CategoryCard.vue'
import SearchIcon from '@/components/SearchIcon.vue'
import MenuIcon from '@/components/MenuIcon.vue'

export default {
  name: "Header",
  components: {
    CategoryCard,
    SearchIcon,
    MenuIcon
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
  computed:{
    styleHeader() {
      if (this.clicked) {
        return { color: '#ebf4f1', 'background-color': '#5e5f61' }
      }
      else {
        return { color: '#243746', 'background-color': 'white' }
      }
    },
    styleIcon() {
      if (this.clicked) {
        return 'white'      
      }
      else {
        return 'black'
      }
    }
  },
  methods: {
    openList() {
      this.clicked = !this.clicked
      if (this.title === 'Главная') {
        this.title = 'Меню'
      }
      else {
        this.title = 'Главная'
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

  &__buttons{
    display: flex;
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

}
</style>
