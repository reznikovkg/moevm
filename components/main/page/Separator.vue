<template>
  <div class="separator">
    <div class="separator__item" />
    <div class="separator__title">
      <slot>
        ФАРМАЦЕВТИЧЕСКИЙ ФАКУЛЬТЕТ
      </slot>
    </div>
    <div class="separator__item" />
  </div>
</template>

<script>
export default {
  name: "Separator"
}
</script>

<style scoped lang="less">
.separator {
  height: 18px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;

  &__item {
    flex: 1;
    height: 0.5px;
    background-color: #505050;
  }

  &__title {
    padding: 0 32px;
    font-size: 8px;
    font-weight: 100;
  }
}
</style>
