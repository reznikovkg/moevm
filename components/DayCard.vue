<template>
  <div class="day-card" :style="styleGridPosition">
    <LessonCard v-if="everyWeekLesson" :lesson="everyWeekLesson"/>
    <div v-else class="day-card__split">
      <div class="day-card__split__lesson-container">
        <LessonCard v-if="onlyNumeratorLesson" :lesson="onlyNumeratorLesson"/>
      </div>
      <div class="day-card__split__lesson-container">
        <LessonCard v-if="onlyDenominatorLesson" :lesson="onlyDenominatorLesson"/>
      </div>
    </div>
  </div>
</template>

<script>
import LessonCard from "./LessonCard.vue"

export default {
  name: "DayCard",
  components: {
    LessonCard
  },
  props: {
    day: String,
    time: String,
    rawIndex: Number,
    columnIndex: Number,
    schedule: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    lessons () {
      return this.schedule.filter(
        (lesson) => lesson.day === this.day && lesson.time === this.time
      )
    },
    everyWeekLesson () {
      return this.lessons.find((lesson) => lesson.everyWeek)
    },
    onlyNumeratorLesson () {
      return this.lessons.find((lesson) => lesson.onlyNumerator)
    },
    onlyDenominatorLesson () {
      return this.lessons.find((lesson) => lesson.onlyDenominator)
    },
    styleGridPosition () {
      const rawStart = this.rawIndex + 2
      const rawEnd = rawStart + 1
      const columnStart = this.columnIndex + 2
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
.day-card {
  &__split {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: auto;

    &__lesson-container:first-child {
      border-bottom: 1px dashed #d2d3d3;
    }
  }
}
</style>
