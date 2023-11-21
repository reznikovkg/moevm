<template>
  <div class="lesson">
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
      default: null
    }
  }
}
</script>

<style scoped lang="less">
.lesson {
  display: flex;
  flex-direction: column;
}
</style>