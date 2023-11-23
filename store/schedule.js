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
      color: "yellow"
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
      color: "green"
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
      color: "green"
    }
  ]
}

const getters = {
  getSchedule: state => state.schedule
}

export default {
  namespaced: true,
  state,
  getters
}