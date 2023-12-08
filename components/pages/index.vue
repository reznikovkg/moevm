<template>
  <Page>
    <h2>Список страниц:</h2>
    <ul>
      <li v-for="page in pages" :key="page.name">
        <nuxt-link :to="{ name: page.name }">{{ page.name }}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/card-new-preview">Card</nuxt-link>
      </li>
    </ul>

    <div class="d-flex gap-12">
      <el-carousel :autoplay="false" class="flex-1" indicator-position="outside" height="500px">
        <el-carousel-item>
          <img :src="require(`~/assets/images/history/Aleksandr.jpg`)" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img :src="require(`~/assets/images/history/Alexsei.jpg`)" alt="">
        </el-carousel-item>
      </el-carousel>
      <div>
        <TeacherCard :teacher="decan" style="height: 500px; max-width: 300px; width: 100%" />
      </div>
    </div>

    <Separator />

    <div>
      <h2>Последние новости</h2>
      <el-carousel :autoplay="false" :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="i in news">
          <ArticleCard :article="i" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <Separator />

    <div>
      <h2>Факультет</h2>
      <p>Фармацевтический факультет Воронежского государственного университета организован в 1993 году.</p>
      <p>Факультет готовит специалистов с полным возмещением затрат за счет федеральных средств (50 бюджетных мест) и по договорам с физическими и юридическими лицами. Ежегодно факультет выпускает около 150 специалистов с высшим образованием и около 20 специалистов со средним профессиональным образованием.</p>
      <p>Число обучающихся на программах переподготовки и повышения квалификации ежегодно составляет около 250 человек.</p>
      <p>За время существования факультет подготовил более 1100 специалистов с высшим образованием и около 400 специалистов со средним специальным образованием.</p>
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

    <Separator />

    <div>
      <h2>Частозадаваемые вопросы</h2>
      <ListFaq/>
    </div>

    <Separator />

    <div>
      <h2>Контакты</h2>
      <div class="jc-sb index-page__contacts">
        <div>
          <div>
            <b>Адрес:</b>
            394006, г. Воронеж, Университетская пл., 1.
          </div>
          <div>
            <b>Учебная часть факультета: </b>
            394036, г. Воронеж, Студенческая ул., 3.
          </div>
          <div>
            Тел.: (473) 253-07-89; 253-04-28; 255-47-76.
          </div>
          <div>
            Факс: (473) 253-04-28.
          </div>
          <div>
            e-mail: deanery@pharm.vsu.ru
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
import { mapGetters } from 'vuex'
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
        code: 'chupandina',
        name: 'Чупандина Елена Евгеньевна',
        cover: require('~/assets/images/cel.jpeg'),
        position: 'Декан',
        quote: 'Быть лучшими во всем!'
      }
    }
  },
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
</style>
