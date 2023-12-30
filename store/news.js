import api from "@/services/api";

const state = {
  news: [
    {
      uuid: "a420871a-e9a3-4f3f-bbfe-a5311ef6ab8f",
      title: "Мастер-классы для школьников",
      cover: 'http://www.pharm.vsu.ru/pict/zozh20183.jpg',
      body: "29 апреля с 14:00 по 16:00 на факультете ПММ пройдёт серия мастер-классов для школьников, на которых преподаватели и студенты факультета на практике покажут, чем занимаются на факультете ПММ, и расскажут много интересного!\n\nТемы занятий:\n14:00. Дроны и чем их \"прошивают\". Мастер-класс ведет к.ф.-м.н., доцент, доцент кафедры механики и компьютерного моделирования Яковлев А. Ю.\n14:00. Как создать и обучить свою первую нейросеть. Мастер-класс ведет д.т.н., доцент, профессор кафедры математических методов исследования операций Каширина И. Л. \n15:00. Информационная и компьютерная безопасность. Мастер-класс ведет ст.науч.сотр. ФАУ \"Государственный научно-исследовательский испытательный институт проблем технической защиты информации Федеральной службы по техническому и экспортному контролю\", ст. преп. кафедры ERP-систем и бизнес-процессов (кафедра кибербезопасности информационных систем) Дергачев Ю. А. \n15:00. Трехмерная компьютерная графика в Unity. Освещение сцены. Мастер-класс ведет инженер-программист ООО \"Техномаркет\", магистрант кафедры вычислительной математики и проектирования информационных систем Черняев Д. Е. \n\nЗаписаться на мастер-класс можно по ссылке или сканируя qr-код. Количество мест ограничено.",
      dateCreated: new Date(2023, 4, 23),
      dateModified: new Date(2023, 4, 23)
    },
    {
      uuid: "7b09d45e-8b68-4ffd-b32d-ddf2e11c9153",
      title: "Итоги олимпиады",
      cover: 'http://www.pharm.vsu.ru/pict/olymp20173.jpg',
      body: "9 апреля на базе факультета ПММ состоялась олимпиада ВГУ для школьников по информатике.\nВ олимпиаде приняли участие 38 школьников г. Воронежа и Воронежской области. Самый юный участник олимпиады является учеником 7 класса.\nУчастникам было предложено 5 задач разного уровня сложности. При выставлении баллов учитывалась не только корректная работа задач, но и эффективность предложенных решений.\nПо итогам проверки решений оргкомитетом было выделено 7 участников, которые удостоились дипломов различных степеней. Награждение состоялось 23 апреля в рамках дня открытых дверей факультета. Призёры, помимо наградных дипломов, получили памятные подарки, предоставленные компанией-партнером факультета ООО «Числа». Победителю был вручён в подарок квадрокоптер.\n\nСписок призеров и дипломантов олимпиады.\n\nПризёры:\nИванников Даниил, ученик 11 класса гимназии им. академика Н. Г. Басова;\nРыбников Дмитрий, ученик 10 класса МБОУ СОШ №105;\nСальков Семён, ученик 11 класса МБОУ СОШ №106;\nФилиппов Никита, ученик 11 класса МБОУ СОШ №98.\n\nДипломант 3 степени:\nБухонов Дмитрий, ученик 11 класса Воронежской православной гимназии во имя святителя Митрофана Воронежского.\n\nДипломант 2 степен:\nДементьев Андрей, ученик 11 класса МБОУ СОШ №98.\n\nПобедитель олимпиады:\nВолович Евгений, ученик 9 класса МБОУ Лицея №1.\n\nПоздравляем ребят!\n\nВсе участники и педагоги будут награждены сертификатами участника и благодарственными письмами.",
      dateCreated: new Date(2023, 4, 23),
      dateModified: new Date(2023, 4, 23)
    },
    {
      uuid: "168ed6c2-3cb3-4340-859d-6f3dc136b860",
      title: "Всемирный день здоровья",
      cover: 'http://www.pharm.vsu.ru/pict/zozh20184.jpg',
      body: "МИНИСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ РФ\nФедеральное государственное бюджетное образовательное учреждение высшего образования\n«Воронежский государственный университет»\n\nОлимпиада ВГУ для школьников по информатике\n2022/2023 учебный год\n\nВоронежский государственный университет в соответствии с Положением и Приказом ректора проводит Олимпиаду школьников по информатике. Участвовать в Олимпиаде имеют право все желающие. При этом к конкурсному зачету допускаются лишь учащиеся старших классов средних общеобразовательных учреждений РФ. Олимпиада проводится в один очный этап, который пройдет в ВГУ 9 апреля 2023 года.\n\nПроведение олимпиады\n\nДля участия в олимпиаде необходимо подать заявку, заполнив форму:\nhttps://docs.google.com/forms/d/e/1FAIpQLSdApVo-eGv3nDU1W3seDJ7eQzvwtoWo_-dS7Q0eioyaQmtcHQ/viewform?usp=sf_link\n\nУчастникам будет предложено 5 задач. Решение каждой задачи может быть выполнено на одном из следующих языков программирования: Python, Pascal, Delphi, C/C++, Java, C#.\n\nПроверка решений осуществляется в автоматическом режиме на сериях тестов. Кроме того, при выставлении баллов за алгоритмические задачи учитываются эффективность алгоритмов.\n\nРезультаты проверки решений будут опубликованы до 23 апреля 2023 года.\n\nСо всеми возникающими вопросами обращайтесь в оргкомитет Олимпиады по Email:\nBolotova.svetlana@gmail.com с темой «Олимпиада школьников по информатике»",
      dateCreated: new Date(2023, 3, 28),
      dateModified: new Date(2023, 3, 28),
    }
  ]
}

const getters = {
  getNews: state => state.news,
  getNewsByFilter: state => ({field, value}) => state.news.filter(news => news[field] === value),
  getNewsById: state => uuid => state.news.find(news => news.id === uuid),
  getNewsByTitle: state => title => state.news.find(news => news.title === title)
}

const mutations = {
  addNews: (state, payload) => {
    state.news.push(payload)
  },
  updateNews: (state, payload) => {
    const i = state.news.findIndex(x => x.uuid === payload.uuid)
    if (i !== -1) {
      state.news.splice(i, 1, payload)
    }
  },
  setNews: (state, payload) => {
    state.news = payload
  }
}

const actions = {
  fetchNews: ({commit, dispatch}, payload) => new Promise((resolve, reject) => {
    // TODO
    api.client.$get('/moevm/news/list')
      .then((response) => {
        console.log(response)
        commit('setNews', response.news)
      })
    return resolve()
  }),
  updateNews: (store, payload) => new Promise((resolve, reject) => {
    store.commit('updateNews', payload)
    return resolve()
  })
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
