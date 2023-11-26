<template>
  <div class="day">
    <LessonCard v-if="everyWeekLesson" :lesson="everyWeekLesson"/>
    <div v-else class="day__split">
      <div>
        <LessonCard v-if="onlyNumeratorLesson" :lesson="onlyNumeratorLesson"/>
      </div>
      <div>
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
    lessons: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    everyWeekLesson () {
      return this.lessons.find((lesson) => lesson.everyWeek)
    },
    onlyNumeratorLesson () {
      return this.lessons.find((lesson) => lesson.onlyNumerator)
    },
    onlyDenominatorLesson () {
      return this.lessons.find((lesson) => lesson.onlyDenominator)
    }
  }
}
</script>

<style scoped lang="less">
.day {
  display: flex;
  flex-direction: column;

  &__split {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: auto;

    & > *:first-child {
      border-bottom: 1px dashed lightgray;
    }
  }
}
</style>