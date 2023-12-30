<template>
  <Page>
    <div class="d-flex gap-12 main-banner">
      <el-carousel :autoplay="false" class="flex-1 sm-m" height="500px" direction="vertical">
        <el-carousel-item>
          <img :src="require(`~/assets/images/history/Aleksandr.jpg`)" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img :src="require(`~/assets/images/history/Alexsei.jpg`)" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="jc-c">
        <TeacherCard :teacher="decan" style="height: 500px; max-width: 300px; width: 100%" />
      </div>
    </div>

    <Separator />

    <h2>Последние новости</h2>
    <div class="news">
      <NuxtLink v-for="(i, index) in newsAll" :key="index" :to="{ name: 'news-id', params: { id: i.id } }">
        <ArticleCard :article="i" />
      </NuxtLink>
    </div>

    <Separator />

<!--    <h2>Мероприятия</h2>-->
<!--    <el-carousel :autoplay="false" :interval="4000" type="card" height="200px">-->
<!--      <el-carousel-item v-for="i in news" :key="i.cover">-->
<!--        <ArticleCard :article="i" />-->
<!--      </el-carousel-item>-->
<!--    </el-carousel>-->

<!--    <Separator />-->

    <div class="d-flex fd-col-mobile" style="gap: 40px">
      <div class="flex-1">
        <h2>Факультет</h2>
        <p>Фармацевтический факультет Воронежского государственного университета организован в 1993 году.</p>
        <p>Факультет готовит специалистов с полным возмещением затрат за счет федеральных средств (50 бюджетных мест) и по договорам с физическими и юридическими лицами. Ежегодно факультет выпускает около 150 специалистов с высшим образованием и около 20 специалистов со средним профессиональным образованием.</p>
        <p>Число обучающихся на программах переподготовки и повышения квалификации ежегодно составляет около 250 человек.</p>
        <p>За время существования факультет подготовил более 1100 специалистов с высшим образованием и около 400 специалистов со средним специальным образованием.</p>

      </div>
      <div class="ta-c">
        <img class="img-fix" src="http://www.pharm.vsu.ru/pict/conf23_4.jpg" alt="">
      </div>
    </div>
    <div class="d-flex fd-col-mobile-2" style="gap: 40px">
      <div class="ta-c">
        <img class="img-fix mb-6" src="http://www.pharm.vsu.ru/pict/conf23_32.jpg" alt="">
        <div>
          <img class="img-fix" src="http://www.pharm.vsu.ru/pict/conf23_36.jpg" alt="">
        </div>
      </div>
      <div class="flex-1">
        <p>Факультет реализует систему непрерывного фармацевтического образования, которая включает следующие основные образовательные программы (ООП):</p>
        <ul>
          <li>программа среднего профессионального образования (СПО). Специальность «Фармация»;</li>
          <li>программа высшего образования (ВО). Форма обучения — очная. Специальность «Фармация»;</li>
          <li>программы ординатуры по трем специальностям: Управление и экономика фармации, Фармацевтическая химия и фармакогнозия, Фармацевтическая технология;</li>
          <li>аспирантура по трем специальностям: Фармацевтическая химия и фармакогнозия, Организация фармацевтического дела, Клиническая фармакология;</li>
          <li>программы переподготовки специалистов по всем специальностям;</li>
          <li>программы повышения квалификации для специалистов со средним и высшим фармацевтическим образованием.</li>
        </ul>
        <p>Факультет обеспечивает возможность построения гибких образовательных траекторий по всем уровням образования.</p>
        <p>Реализация образовательных программ осуществляется в соответствии с требованиями актуализированных федеральных образовательных стандартов.</p>
        <p>Все образовательные программы разработаны с участием представителей крупнейших работодателей регионального фармацевтического рынка и прошли экспертизу на соответствие международному стандарту качества BS EN ISO 9001:2008, в 2009 году пройдена повторная сертификация СМК. Сертификат выдан органом по сертификации NQA Global Assurance Limited (Великобритания).</p>
        <p>Более 98% выпускников трудоустраиваются по специальности, 2% трудоустраиваются медицинскими представителями.</p>
        <p>География трудоустройства выпускников факультета подтверждает качество подготовки специалистов на факультете. Выпускники работают во всех крупных российских и региональных аптечных сетях, на ведущих фармацевтических предприятиях, в органах исполнительной власти субъектов федерации и муниципальных образований.</p>
      </div>
    </div>

    <Separator />

    <div>
      <h2>Частозадаваемые вопросы</h2>
      <ListFaq/>
    </div>

    <Separator />

    <h2>Наши преподаватели</h2>
    <div class="teachers">
      <TeacherCard v-for="(i, index) in teachers" :key="index" :teacher="i" style="height: 300px;" size="small" />
    </div>

    <Separator />

    <div>
      <h2>Контакты</h2>
      <div class="jc-sb index-page__contacts">
        <div>
          <div class="mb-6">
            По любым вопросам вы всегда можете связаться с нами <br>
            любым удобным для вас способом  или обратиться с <br>
            очным визитом. <b>Мы всегда вам рады!</b>
          </div>
          <div class="mb-6">
            <b>Адрес:</b> 394006, г. Воронеж, Университетская пл., 1.
          </div>
          <div class="mb-6">
            <b>Учебная часть факультета: </b> 394036, г. Воронеж, Студенческая ул., 3.
          </div>
          <div class="mb-6">
            <b>Телефон:</b> (473) 253-07-89; 253-04-28; 255-47-76.
          </div>
          <div class="mb-6">
            <b>Факс:</b> (473) 253-04-28.
          </div>
          <div class="mb-6">
            <b>E-mail:</b> deanery@pharm.vsu.ru
          </div>
        </div>
        <div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A445cd185998ce8b52db1bdba272160c6b4a19b6e4dafb87bc8c984280cd1ba67&amp;source=constructor"
            width="500"
            height="400"
            class="index-page__map"
            frameborder="0"
          />
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ArticleCard, { CATEGORIES } from '@/components/main/cards/ArticleCard.vue';
import ListFaq from '@/components/parts/faq/ListFaq.vue';
import TeacherCard from "@/components/main/cards/TeacherCard"

export default {
  name: 'IndexPage',
  head () {
    return { title: "Факультет" };
  },
  components: {
    ArticleCard,
    ListFaq,
    TeacherCard
  },
  computed: {
    ...mapGetters('news', [
      'getNews'
    ]),
    news () {
      return this.getNews.slice(0, 3)
    },
    pages () {
      return this.$router.options.routes
        .filter((route) => route.path !== "/")
        .map((route) => ({ name: route.name }))
    },
    decan () {
      return {
        code: 'abr',
        name: 'Абрамов Геннадий Владимирович',
        cover: require('~/assets/images/abr.png'),
        position: 'Заведующий',
        quote: 'Быть лучшими во всем!'
      }
    },
    newsAll () {
      return this.getNews
    },
    teachers () {
      return [
        {
          code: 'chupandina',
          name: 'Сливкин Алексей Иванович',
          cover: 'http://www.pharm.vsu.ru/pict/slivkin.jpg',
          position: 'Профессор',
        },
        {
          code: 'chupandina',
          name: 'Тринеева Ольга Валерьевна',
          cover: 'http://www.pharm.vsu.ru/pict/trineeva.jpg',
          position: 'Доцент',
        },
        {
          code: 'chupandina',
          name: 'Провоторова Светлана Ильинична',
          cover: 'http://www.pharm.vsu.ru/pict/provotorova.jpg',
          position: 'Доцент',
        },
        {
          code: 'chupandina',
          name: 'Коренская Ирина Михайловна',
          cover: 'http://www.pharm.vsu.ru/pict/korenskaya.jpg',
          position: 'Доцент',
        },
        {
          code: 'chupandina',
          name: 'Чистякова Анна Сергеевна',
          cover: 'http://www.pharm.vsu.ru/pict/chistyakova.jpg',
          position: 'Доцент',
        },
      ]
    }
  },
  mounted () {
    this.fetchNews()
  },
  methods: {
    ...mapActions('news', [
      'fetchNews'
    ])
  }
}
</script>

<style lang="less" scoped>
.index-page {

  &__contacts {

    @media screen and (max-width: @sizeMd) {
      flex-direction: column;
    }
  }

  &__map {
    @media screen and (max-width: @sizeMd) {
      width: 100% !important;
    }
  }
}

.main-banner {
  @media screen and (max-width: @sizeMd) {
    flex-direction: column;
  }
}

.teachers {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  @media screen and (max-width: @sizeMd) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.news {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  @media screen and (max-width: @sizeMd) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.img-fix {
  max-width: 400px;
  width: 100%;
  box-shadow: 4px 4px 11px #bdbdbd;
  border-radius: 10px;
  overflow: hidden;
}
</style>
