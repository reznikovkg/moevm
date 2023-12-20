<template>
  <div class="schedule">
    <div
      v-for="(day, dayIndex) in timetable"
      :key="day.name"
      class="schedule__day"
    >
      <div class="schedule__day-header">
        {{ day.name }}
      </div>
      <div
        v-for="(time, timeIndex) in day.times"
        :key="timeIndex"
        class="schedule__time-slot"
      >
        <div class="schedule__time">
          {{ time }}
        </div>
        <div class="schedule__day-card">
          <DayCard
            :day="day.name"
            :time="time"
            :rawIndex="timeIndex"
            :columnIndex="dayIndex"
            :schedule="schedule"
          />
        </div>
      </div>
    </div>
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
  computed: {
    timetable () {
      return daysOfWeek.map(day => ({
          name: day,
          times: times
        }))
    }
  }
}
</script>

<style lang="less" scoped>
.schedule {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  border: 1px solid #000000;
  background-color: #000000;

  &__day {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto repeat(7, 1fr);
    border: 1px solid #000000;
    gap: 1px;
    background-color: #000000;
  }

  &__day-header {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    background-color: #f2f2f2;
    padding: 8px;
    text-align: left;
  }

  &__time-slot {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    border: 1px solid #000000;
    gap: 1px;
    background-color: #000000;
  }

  &__time, &__day-card {
    background-color: #ffffff;
    padding: 8px;
    text-align: left;
  }
}
</style>
