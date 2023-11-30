<template>
  <div class="schedule">
    <div class="schedule__empty-slot schedule__slot"/>
    <div
      v-for="(dayOfWeek, index) in daysOfWeek"
      class="schedule__day-of-week schedule__slot"
      :key="index"
    >
      <span>{{ dayOfWeek }}</span>
    </div>
    <div v-for="time in times" class="schedule__time schedule__slot">
      <span>{{ time }}</span>
    </div>
    <template v-for="(time, timeIndex) in times">
      <template v-for="(dayOfWeek, dayIndex) in daysOfWeek">
        <DayCard
          :day="dayOfWeek"
          :time="time"
          :schedule="schedule"
          :style="styleGridPosition(timeIndex, dayIndex)"
          class="schedule__slot"
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
    ...mapGetters('schedule', {
      schedule: "getSchedule"
    }),
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
  border: 1px solid #000000;
  gap: 1px;
  background-color: #000000;

  &__empty-slot {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  &__slot {
    background-color: #ffffff;
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
}
</style>
