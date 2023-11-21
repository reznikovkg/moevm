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
        />
      </template>
    </template>
  </div>
</template>

<script>
import DayCard from "../DayCard.vue"

export default {
  name: "SchedulePage",
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
    daysOfWeek: () => [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота"
    ],
    times: () => [
      "8:00",
      "9:45",
      "11:30",
      "13:25",
      "15:10",
      "16:55",
      "18:40"
    ]
  },
  methods: {
    lessons (dayOfWeek, time) {
      return this.schedule.filter((lesson) => {
        return lesson.day == dayOfWeek && lesson.time == time
      })
    },
    styleGridPosition (raw, column) {
      const rawStart = raw + 2
      const rawEnd = rawStart + 1
      const columnStart = column + 2
      const columnEnd = columnStart + 1
      return {
        gridColumn: `${columnStart} / ${columnEnd}`,
        gridRow: `${rawStart} / ${rawEnd}`,
        backgroundColor: `red`
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
  gap: 2px;

  &__empty-item {
    grid-row: 1 / 2;
  }

  &__day-of-week {
    grid-row: 1 / 2;
  }

  &__time {
    grid-column: 1 / 2;
  }
}
</style>