<template>
  <div :style="styleLesson" class="lesson">
    <span>{{ lesson.name }}</span>
    <span>{{ lesson.classroom }}</span>
    <span>{{ lesson.teacher.surname }}</span>
  </div>
</template>

<script>
export default {
  name: "LessonCard",
  props: {
    lesson: Object
  },
  computed: {
    defaultColor () {
      if (this.lesson.everyWeek) {
        return `#ffffa3`
      }
      if (this.lesson.onlyNumerator) {
        return '#90ee90'
      }
      if (this.lesson.onlyDenominator) {
        return `#ffa4a4`
      }
      return `#ffffff`
    },
    styleLesson () {
      return {
        backgroundColor: `${this.lesson.color || this.defaultColor}`
      }
    }
  }
}
</script>

<style scoped lang="less">
.lesson {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
