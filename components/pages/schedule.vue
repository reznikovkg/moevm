<template>
  <div class="schedule">
    <div class="schedule__empty-item"/>
    <div v-for="dayOfWeek in daysOfWeek" class="schedule__day-of-week">
      <span>{{ dayOfWeek }}</span>
    </div>
    <div v-for="time in times" class="schedule__time">
      <span>{{ time }}</span>
    </div>
    <template v-for="(time, timeIndex) in times">
      <template v-for="(dayOfWeek, dayIndex) in daysOfWeek">
        <DayCard
          :lessons="lessons(dayOfWeek, time)"
          :style="styleGridPosition(timeIndex, dayIndex)"
          class="schedule__day-card"
        />
      </template>
    </template>
  </div>
</template>

<script>
import DayCard from "../DayCard.vue"
import { mapGetters } from "vuex"

export default {
  name: "SchedulePage",
  components: {
    DayCard
  },
  computed: {
    ...mapGetters('schedule', [
      "getSchedule"
    ]),
    schedule () {
      return this.getSchedule
    },
    daysOfWeek () {
      return [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
      ]
    },
    times () {
      return [
        "8:00",
        "9:45",
        "11:30",
        "13:25",
        "15:10",
        "16:55",
        "18:40"
      ]
    }
  },
  methods: {
    lessons (dayOfWeek, time) {
      return this.schedule.filter((lesson) => lesson.day == dayOfWeek && lesson.time == time)
    },
    styleGridPosition (raw, column) {
      const rawStart = raw + 2
      const rawEnd = rawStart + 1
      const columnStart = column + 2
      const columnEnd = columnStart + 1
      return {
        gridColumn: `${columnStart} / ${columnEnd}`,
        gridRow: `${rawStart} / ${rawEnd}`
      }
    }
  }
}
</script>

<style scoped lang="less">
.schedule {
  display: grid;
  grid-template-columns: auto repeat(6, 1fr);
  grid-template-rows: auto repeat(7, 1fr);
  border-bottom: 1px solid black;
  border-left: 1px solid black;

  &__empty-item {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  &__day-of-week {
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
  }

  &__time {
    grid-column: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
  }

  &__day-card {
    height: 100%;
  }

  & > * {
    border-top: 1px solid black;
    border-right: 1px solid black;
  }
}
</style>
