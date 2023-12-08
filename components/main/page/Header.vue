<template>
  <header class="header" :class="{ 'header--expanded': clicked }">
    <div class="header__top main-container">
      <div class="header__title">
        <img src="@/assets/pictures/computer.png" class="header__logo" />
        <h3 class="header__text">Фармацевтический <br> факультет</h3>
      </div>
      <div class="header__buttons">
        <SearchIcon :color="styleIcon" />
        <MenuIcon class="main-menu" :color="styleIcon" @click.native="() => openList()" />
      </div>
    </div>
    <div class="header__cards main-container">
      <CategoryCard
        :category="{
          title: 'Факультет',
          image: 'https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg',
          content: category1
        }"
        :expanded="clicked"
      />
      <CategoryCard
        :category="{
          title: 'Образование',
          image: 'https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg',
          content: category1
        }"
        :expanded="clicked"
      />
      <CategoryCard
        :category="{
          title: 'Наука',
          image: 'https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg',
          content: category1
        }"
        :expanded="clicked"
      />
      <CategoryCard
        :category="{
          title: 'Прочее',
          image: 'https://ui.pnzreg.ru/upload/iblock/c94/3016425.jpg',
          content: category1
        }"
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
  props: {
    value: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      clicked: false,
      title: 'Главная'
    };
  },
  computed: {
    category1 () {
      return [
        {
          label: 'О нас',
          route: { path: '/o-nas' }
        }
      ]
    },
    styleIcon () {
      return this.clicked ? 'white' : 'black'
    }
  },
  methods: {
    openList () {
      this.clicked = !this.clicked
      if (this.title === 'Главная') {
        this.title = 'Меню'
      } else {
        this.title = 'Главная'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main-menu {
  cursor: pointer;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
}

.header {
  transition: 0.2s;
  padding: 12px 0;
  margin-bottom: 12px;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    display: flex;
    align-items: center;
  }

  &__logo {
    max-height: 120px;
  }

  &__buttons {
    display: flex;
  }

  &__form {
    border: 1px solid #ccc;

    border-left: 0;
    border-right: 0;
    border-top: 0;
  }

  &__text {
    font-size: 22px;
    padding-left: 20px;
    word-wrap: break-word;
    vertical-align: middle;
    margin: 0;
    font-family: @ffMontserrat;
  }

  &__cards {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 12px;

    @media screen and (max-width: @sizeMd) {
      flex-direction: column;
    }
  }

  &--expanded {
    background-color: #464646;
  }

  &--expanded & {

    &__title {
      color: white;
    }
  }
}
</style>
