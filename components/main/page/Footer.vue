<template>
  <footer class="footer__wrapper">
    <div class="footer main-container">
      <div class="footer__main">
        Лого
      </div>
      <div class="footer__content">
        <div class="footer__column">
          <div class="footer__section-name">
            <NuxtLink to="/" class="footer__link">Факультет</NuxtLink>
          </div>
          <div class="footer__section-list">
            <div><NuxtLink to="/o-nas" class="footer__link">О нас</NuxtLink></div>
            <div>История</div>
            <div>Структура</div>
            <div>Деканат</div>
            <div>Кафедры</div>
            <div>Пресса</div>
            <div>Жизнь</div>
            <div>Новости</div>
          </div>
        </div>
        <div class="footer__column">
          <div class="footer__section-name">
            Образование
          </div>
          <div class="footer__section-list">
            <div>Поступающим</div>
            <div>Образовательные программы</div>
            <div>СПО</div>
            <div>Ординатура</div>
            <div>Аспирантура</div>
            <div>Повышение квалификации</div>
            <div>Практика</div>
            <div>Аккредитация</div>
          </div>
        </div>
        <div class="footer__column">
          <div class="footer__section-name">
            Наука
          </div>
          <div class="footer__section-list">
            <div>Ученый совет</div>
            <div>Научно-методический совет</div>
            <div>Конференции</div>
            <div>Научное студенческое общество</div>
            <div>Олимпиады</div>
          </div>
        </div>
        <div class="footer__column">
          <div class="footer__section-name">
            Прочее
          </div>
          <div class="footer__section-list">
            <div>Трудоустройство</div>
            <div>Сессия</div>
            <div>Студентам</div>
            <div>Выпускникам</div>
            <div>Работодателям</div>
            <div>Сотрудничество</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="less">
.footer {
  padding: 40px 12px;
  font-family: @ffMontserrat;

  display: flex;
  color: #FAFAFA;

  &__wrapper {
    background-color: #505050;
  }

  &__main {
    margin-right: 80px;
  }

  &__content {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
  }

  &__column {
    min-width: 280px;
  }

  &__section-name {
    min-width: 280px;
    margin-bottom: 6px;
  }

  &__section-list {
    min-width: 280px;
    font-size: 12px;
  }

  &__link {
    color: #FFFFFF;
    text-decoration: none;
    transition: 300ms;
    margin-bottom: 2px;
    display: block;

    &:hover {
      color: #D1D1D1;
    }
  }
}
</style>
