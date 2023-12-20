<template>
  <div class="schedule">
    <table class="schedule__table">
      <tbody
      v-for="(day, index) in timetable"
      :key="day.name"
      class="schedule__day"
      >
        <tr class="schedule__day-header">
          <th colspan="2">
            {{ day.name }}
          </th>
        </tr>
        <tr
        v-for="(time, d) in day.items"
        :key="d"
        class="schedule__time-slot"
        >
          <td class="schedule__time">
            {{ time }}
          </td>
          <td class="schedule__day-card">
            <DayCard
            :day="day.name"
            :time="time"
            :rawIndex="d"
            :columnIndex="index"
            :schedule="schedule"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DayCard from "./DayCard.vue"

const daysOfWeek = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье'
]

const times = [
  "8:00",
  "9:45",
  "11:30",
  "13:25",
  "15:10",
  "16:55",
  "18:40"
]

export default {
  name: 'ScheduleTableMobile',
  components: {
    DayCard
  },
  props: {
    schedule: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      timetable: daysOfWeek.map(day => ({
        name: day,
        items: times
      }))
    }
  }
}
</script>

<style lang="less" scoped>
.schedule {

  &__table {
    width: 100%;
    border-collapse: collapse;
  }

  &__day-header {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
    background-color: #f2f2f2;
  }

  &__time, &__day-card {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
  }
}
</style>
