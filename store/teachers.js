const state = {
  teachers: [
    {
      code: 'chupandina',
      firstName: "Чупандина",
      lastName: "Елена",
      patronymic: "Евгеньевна",
      bio: [],
      divisionPosition: {
        division: "Кафедра математического обеспечения ЭВМ",
        position: "Доцент"
      },
      academicTitle: "Доцент",
      academicDegree: "Кандидат физико-математических наук",
      scientificSpecialty: "(05.13.17) Теоретические основы информатики",
      experience: {
        general: 11,
        specialty: 11
      },
      professionalDevelopment: [
        "Подготовка экспертов для работы в региональной предметной комиссии при проведении государственной итоговой аттестации по образовательным программам среднего и общего образования по предмету \"Информатика и ИКТ\" (2018г.)",
        "Использование электронного обучения и дистанционных технологий в образовательной практике вуза (2021г.)",
        "Психология делового общения и бизнес-переговоров (2021г.)",
        "Оказание первой помощи (2021г.)"
      ],
      activities: [""],
      titlesAwardsAdditionalCompetencies: "",
      publications: {
        scientific: "http://www.lib.vsu.ru/for.education.vsu.ru/vsuauthscript.php?author=%7B$Болотова%20Светлана%20Юрьевна%7D",
        educational: "http://www.lib.vsu.ru/for.education.vsu.ru/vsumetod.php?author=%7B$Болотова%20Светлана%20Юрьевна%7D"
      },
      preparedBy: {
        doctoralDegree: 0,
        candidatesOfSciences: 0
      },
      courses: [
        {
          specialization: "Направление 01.03.02 Прикладная математика и информатика",
          subjects: [
            "Программирование для мобильных устройств",
            "Языки и методы программирования"
          ]
        },
        {
          specialization: "Направление 02.03.02 Фундаментальная информатика и информационные технологии",
          subjects: [
            "Архитектура мобильных устройств",
            "Программирование для мобильных устройств"
          ]
        },
        {
          specialization: "Направление 02.04.02 Фундаментальная информатика и информационные технологии",
          subjects: [
            "Программирование на платформе iOS",
            "Создание мобильных приложений iOS"
          ]
        }
      ],
      contacts: "",
      dateCreated: new Date(),
      dateModified: new Date()
    },
    {
      uuid: "24d4e64b-487f-4eb3-9d48-e92145734314",
      firstName: "Геннадий",
      lastName: "Абрамов",
      patronymic: "Владимирович",
      bio: [],
      divisionPosition: [
        {
          division: "Кафедра математического обеспечения ЭВМ",
          position: "Заведующий кафедрой"
        },
        {
          division: "Кафедра информационных систем",
          position: "Профессор"
        }
      ],
      academicTitle: "Профессор",
      academicDegree: "Доктор технических наук",
      scientificSpecialty: "(05.13.01) Системный анализ, управление и обработка информации (по отраслям)",
      experience: {
        general: 41,
        specialty: 28
      },
      professionalDevelopment: [
        "Локальные сети и интернет (2017г.)",
        "Оказание первой помощи (2018г.)",
        "Создание междисциплинарных образовательных программ в математическом моделировании и программировании для исследования актуальных проблем математики и учебного процесса (2018г.) Использование электронного обучения и дистанционных технологий в образовательной практике вуза (2021г.)",
        "Оказание первой помощи (2021г.)"
      ],
      activities: [""],
      titlesAwardsAdditionalCompetencies: "",
      publications: {
        scientific: "http://www.lib.vsu.ru/for.education.vsu.ru/vsuauthscript.php?author=%7B$Абрамов%20Геннадий%20Владимирович%7D",
        educational: "http://www.lib.vsu.ru/for.education.vsu.ru/vsumetod.php?author=%7B$Абрамов%20Геннадий%20Владимирович%7D"
      },
      preparedBy: {
        doctoralDegree: 0,
        candidatesOfSciences: 0
      },
      courses: [
        {
          specialization: "Направление 02.03.02 Фундаментальная информатика и информационные технологии",
          subjects: [
            "Архитектура вычислительных систем",
            "Компьютерные сети"
          ]
        },
        {
          specialization: "Направление 09.06.01 Информатика и вычислительная техника",
          subjects: [
            "Современные направления развития информатики и информационных технологий",
            "Интеллектуальные системы и технологии"
          ]
        },
        {
          specialization: "специальность 10.05.01 Компьютерная безопасность",
          subjects: ["Компьютерные сети"]
        }
      ],
      contacts: ""
    }
  ]
}

const getters = {
  getTeachers: state => state.teachers,
  getTeachersCount: state => state.teachers.length,
  getTeacherByName: state => fullName => state.teachers.find(teacher => teacher.fullName === fullName),
  getTeacherByUuid: state => uuid => state.teachers.find(teacher => teacher.uuid === uuid),
  getTeacherByFilter: state => ({field, value}) => state.teacher.filter(teacher => teacher[field] === value),
}

const mutations = {
  addTeacher: (state, teacher) => {
    state.teachers.push(teacher)
  },
  updateTeacher: (state, payload) => {
    const i = state.teachers.findIndex(x => x.uuid === payload.uuid)
    if (i !== -1) {
      state.teachers.splice(i, 1, payload)
    }
  }
}

const actions = {
  fetchTeachers: ({commit, dispatch}, payload) => new Promise((resolve, reject) => {
    //make request
    commit('addTeacher', payload)
    return resolve()
  }),
  updateTeacher: (store, payload) => new Promise((resolve, reject) => {
    store.commit('updateTeacher', payload)
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
