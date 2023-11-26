const state = {
  schedule: [
    {
      everyWeek: true,
      onlyNumerator: false,
      onlyDenominator: false,
      time: "8:00",
      day: "Понедельник",
      name: "Матеша",
      classroom: 512,
      teacher: {
        surname: "Иванов"
      },
      color: "lightyellow"
    },
    {
      everyWeek: false,
      onlyNumerator: true,
      onlyDenominator: false,
      time: "9:45",
      day: "Вторник",
      name: "Программирование",
      classroom: 12,
      teacher: {
        surname: "Иванова"
      },
      color: "lightgreen"
    },
    {
      everyWeek: false,
      onlyNumerator: false,
      onlyDenominator: true,
      time: "13:25",
      day: "Среда",
      name: "Физика",
      classroom: 212,
      teacher: {
        surname: "Иванова"
      },
      color: "lightgreen"
    },
    {
      everyWeek: false,
      onlyNumerator: true,
      onlyDenominator: false,
      time: "13:25",
      day: "Среда",
      name: "Занятие",
      classroom: 11,
      teacher: {
        surname: "Иванова"
      },
      color: "lightblue"
    }
  ]
}

const getters = {
  getSchedule: state => state.schedule
}

const mutations = {
  setSchedule (state, payload) {
    state.schedule = payload
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}