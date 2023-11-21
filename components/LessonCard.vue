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
    lesson: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    styleLesson () {
      return {
        backgroundColor: `${this.lesson.color}`
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