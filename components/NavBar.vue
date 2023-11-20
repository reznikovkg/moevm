<template>
  <nav class="navigation">
    <div class="top">
      <div class="title">
        <img src="@/assets/computer.png" class="logo" />
        <h3>Кафедра Математического обеспечения ЭВМ </h3>
      </div>
      <div class="icons">
        <img src="@/assets/search.svg" class="items" />
        <img src="@/assets/menu.svg" class="items" />
      </div>
    </div>
    <div class="lower">

      <CategoryCard :category="{ title: 'Наука' }" style="flex-grow:1" />
      <CategoryCard :category="{ title: 'Образование' }" style=" flex-grow:1" />
      <CategoryCard :category="{ title: 'Структура' }" style=" flex-grow:1" />
      <CategoryCard :category="{ title: 'Прочее' }" style=" flex-grow:1" />
    </div>
  </nav>
</template>
  
<script>
import CategoryCard from '@/components/CategoryCard.vue';
export default {
  name: "NavigationBar",
  components: {
    CategoryCard
  }
};
</script>
  
<style lang="less" scoped>
.logo {
  max-height: 120px;
}

.items {
  max-height: 40px;
}

.navigation {
  display: flex;
  flex-direction: column;
}

.lower {
  margin: 0 auto;
  // padding: 20px;
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
  
  