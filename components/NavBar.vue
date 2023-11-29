<template>
  <nav class="navigation">
    <div class="top">
      <div class="title">
        <img src="@/assets/pictures/computer.png" class="logo" />
        <h3>Кафедра Математического обеспечения ЭВМ </h3>
      </div>
      <div class="icons">
        <input v-model="value" type="search" autocomplete="off" placeholder="Введите" class="form" />
        <span v-if="$colorMode.value === 'gray'">
          <img src="@/assets/pictures/search-light.svg" class="items-dark" />
          <img src="@/assets/pictures/menu-light.svg" class="items-dark" />
        </span>
        <span v-else>
          <img src="@/assets/pictures/search-dark.svg" class="items-light" />
          <img src="@/assets/pictures/menu-dark.svg" class="items-light" />
        </span>
      </div>
    </div>
    <div class="lower" :class="{ wide: clicked }" @click="OpenList">
      <CategoryCard :category="{ title: 'Наука' }" :class="{ wide: clicked }" :expanded=this.clicked />
      <CategoryCard :category="{ title: 'Образование' }" :class="{ wide: clicked }" :expanded=this.clicked />
      <CategoryCard :category="{ title: 'Структура' }" :class="{ wide: clicked }" :expanded=this.clicked />
      <CategoryCard :category="{ title: 'Прочее' }" :class="{ wide: clicked }" :expanded=this.clicked />
    </div>
  </nav>
</template>
  
<script>
import CategoryCard from '@/components/CategoryCard.vue';
export default {
  name: "NavigationBar",
  props: {
    value: {
      type: String,
      required: false
    },
  },
  methods: {
    OpenList() {
      this.clicked = !this.clicked;
    }
  },
  data() {
    return {
      clicked: false
    };
  },
  components: {
    CategoryCard
  }
};
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

.wide {

  margin-bottom: -28px;
}

.items-dark {
  height: 40px;
}

.items-light {
  height: 40px;
}

.navigation {
  display: flex;
  flex-direction: column;
}

.lower {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 5px;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  
  