<template>
  <header class="header" :class="{ 'header--expanded': clicked }">
    <div class="header__top main-container">
      <NuxtLink to="/">
        <div class="header__left">
          <LogoIcon class="header__logo" />
          <h3 class="header__title">
            <span class="header__title__sub">Фарм</span>ацевтический <br><span class="header__title__sub">фак</span>ультет
          </h3>
          <img v-show="!clicked" class="header__logo-vsu sm-m" :src="require('~/assets/images/vsu.png')" alt="">
          <h3 v-show="!clicked" class="header__title sm-m">
            Воронежский<br>
            Государственный<br>
            Университет
          </h3>
        </div>
      </NuxtLink>
      <div class="header__buttons">
        <SearchIcon :color="styleIcon" />
        <MenuIcon class="main-menu" :color="styleIcon" @click.native="() => toggleHandler()" />
      </div>
    </div>
    <div class="header__cards main-container">
      <CategoryCard
        :category="{
          title: 'Факультет',
          image: require('~/assets/images/category4.jpeg'),
          content: category1
        }"
        :expanded="clicked"
      />
      <CategoryCard
        :category="{
          title: 'Наука',
          image: require('~/assets/images/category1.jpeg'),
          content: category3
        }"
        :expanded="clicked"
      />
      <CategoryCard
        :category="{
          title: 'Образование',
          image: require('~/assets/images/category3.jpeg'),
          content: category2
        }"
        :expanded="clicked"
      />
      <CategoryCard
        :category="{
          title: 'Прочее',
          image: require('~/assets/images/category5.jpeg'),
          content: category4
        }"
        :expanded="clicked"
      />
    </div>
  </header>
</template>

<script>
import CategoryCard from '@/components/CategoryCard.vue'
import SearchIcon from '@/components/main/icons/SearchIcon.vue'
import MenuIcon from '@/components/main/icons/MenuIcon.vue'
import LogoIcon from '@/components/main/icons/LogoIcon.vue'
import { mapActions } from 'vuex'

export default {
  name: "Header",
  components: {
    CategoryCard,
    SearchIcon,
    MenuIcon,
    LogoIcon
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
        },
        {
          label: 'История',
          route: { path: '/history' }
        },
        {
          label: 'Структура',
        },
        {
          label: 'Деканат',
        },
        {
          label: 'Кафедры',
        },
        {
          label: 'Пресса',
        },
        {
          label: 'Жизнь',
        },
        {
          label: 'Новости',
          route: { path: '/news' }
        },
      ]
    },
    category2 () {
      return [
        {
          label: 'Поступающим',
        },
        {
          label: 'Образовательные программы',
        },
        {
          label: 'СПО',
        },
        {
          label: 'Ординатура',
        },
        {
          label: 'Аспирантура',
        },
        {
          label: 'Повышение квалификации',
        },
        {
          label: 'Практика',
        },
        {
          label: 'Аккредитация',
        },
      ]
    },
    category3 () {
      return [
        {
          label: 'Ученый совет',
        },
        {
          label: 'Научно-методический совет',
        },
        {
          label: 'Конференции',
        },
        {
          label: 'Научное студенческое общество',
        },
        {
          label: 'Олимпиады',
        },
      ]
    },
    category4 () {
      return [
        {
          label: 'Расписание',
          route: { path: '/schedule' }
        },
        {
          label: 'Трудоустройство',
        },
        {
          label: 'Сессия',
        },
        {
          label: 'Студентам',
        },
        {
          label: 'Выпускникам',
        },
        {
          label: 'Работодателям',
        },
        {
          label: 'Сотрудничество',
        },
        {
          label: 'Форум',
        },
        {
          label: 'Ссылки',
        },
      ]
    },
    styleIcon () {
      return this.clicked ? 'white' : 'black'
    },
    currentPath () {
      return this.$route.path
    }
  },
  watch: {
    currentPath: {
      handler () {
        this.clicked = false
      }
    }
  },
  methods: {
    ...mapActions('news', [
      'fetchNews'
    ]),
    toggleHandler () {
      this.fetchNews()
      this.clicked = !this.clicked
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
  overflow: hidden;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    color: #464646;
  }

  &__left {
    display: flex;
    align-items: center;
  }

  &__logo {
    max-height: 120px;
    width: 100px;
    height: 100px;
    fill: @colorMain;
    @media screen and (max-width: @sizeMd) {
      width: 60px;
      height: 60px;
    }
  }

  &__logo-vsu {
    width: 60px;
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

  &__title {
    font-size: 22px;
    text-transform: uppercase;
    padding: 0 20px;
    word-wrap: break-word;
    vertical-align: middle;
    margin: 0;
    font-family: @ffMontserrat;

    @media screen and (max-width: @sizeMd) {
      font-size: 12px;
      padding: 0 10px;
    }

    &__sub {
      font-size: 32px;

      @media screen and (max-width: @sizeMd) {
        font-size: 20px;
      }
    }
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
    background-color: @colorMain;
  }

  &--expanded & {

    &__logo {
      fill: @colorWhite;
    }

    &__title {
      color: @colorWhite;
    }
  }
}
</style>
