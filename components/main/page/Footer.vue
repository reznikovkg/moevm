<template>
  <footer class="footer__wrapper">
    <div class="footer main-container">
      <div class="footer__main">
        <LogoIcon class="footer__logo" />
        <div class="footer__title">
          Фармацевтический факультет
        </div>
        <div class="footer__title">
          ВГУ © 2023
        </div>
      </div>
      <div class="footer__content">
        <div class="footer__column">
          <div class="footer__section-name">
            <NuxtLink to="/" class="footer__link">Факультет</NuxtLink>
          </div>
          <div class="footer__section-list">
            <div><NuxtLink to="/o-nas" class="footer__link">О нас</NuxtLink></div>
            <div><NuxtLink to="/history" class="footer__link">История</NuxtLink></div>
            <div class="footer__link">Структура</div>
            <div class="footer__link">Деканат</div>
            <div class="footer__link">Кафедры</div>
            <div class="footer__link">Пресса</div>
            <div class="footer__link">Жизнь</div>
            <div><NuxtLink to="/news" class="footer__link">Новости</NuxtLink></div>
          </div>
        </div>
        <div class="footer__column">
          <div class="footer__section-name">
            Наука
          </div>
          <div class="footer__section-list">
            <div class="footer__link">Ученый совет</div>
            <div class="footer__link">Научно-методический совет</div>
            <div class="footer__link">Конференции</div>
            <div class="footer__link">Научное студенческое общество</div>
            <div class="footer__link">Олимпиады</div>
          </div>
        </div>
        <div class="footer__column">
          <div class="footer__section-name">
            Образование
          </div>
          <div class="footer__section-list">
            <div class="footer__link">Поступающим</div>
            <div class="footer__link">Образовательные программы</div>
            <div class="footer__link">СПО</div>
            <div class="footer__link">Ординатура</div>
            <div class="footer__link">Аспирантура</div>
            <div class="footer__link">Повышение квалификации</div>
            <div class="footer__link">Практика</div>
            <div class="footer__link">Аккредитация</div>
          </div>
        </div>
        <div class="footer__column">
          <div class="footer__section-name">
            Прочее
          </div>
          <div class="footer__section-list">
            <div><NuxtLink to="/schedule" class="footer__link">Расписание</NuxtLink></div>
            <div class="footer__link">Трудоустройство</div>
            <div class="footer__link">Сессия</div>
            <div class="footer__link">Студентам</div>
            <div class="footer__link">Выпускникам</div>
            <div class="footer__link">Работодателям</div>
            <div class="footer__link">Сотрудничество</div>
            <div class="footer__link">Форум</div>
            <div class="footer__link">Ссылки</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoIcon from "../icons/LogoIcon";

export default {
  name: "Footer",
  components: {
    LogoIcon
  }
}
</script>

<style scoped lang="less">
.footer {
  margin-top: 24px;
  padding: 40px 12px;
  font-family: @ffMontserrat;

  display: flex;
  color: #FAFAFA;

  @media screen and (max-width: @sizeMd) {
    flex-direction: column-reverse;
  }

  &__wrapper {
    background-color: #505050;
  }

  &__logo {
    width: 80px;
    height: 80px;
    fill: white;
  }

  &__title {
    font-size: 12px;
    text-transform: uppercase;
    margin-top: 4px;
  }

  &__main {
    margin-right: 80px;
    margin-bottom: 40px;
  }

  &__content {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media screen and (max-width: @sizeMd) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: @sizeSm) {
      grid-template-columns: 1fr;
    }
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
    margin-bottom: 30px;
  }

  &__link {
    color: #FFFFFF;
    text-decoration: none;
    transition: 300ms;
    margin-bottom: 4px;
    display: block;

    &:hover {
      color: #D1D1D1;
    }
  }
}
</style>
