<template>
  <div class="page">
    <div class="page__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Page"
}
</script>

<style scoped lang="less">
.page {
  font-family: @ffMontserrat;

  &__content {
    margin-right: 300px;
  }
}
</style>
