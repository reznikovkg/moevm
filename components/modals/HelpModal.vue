<template>
  <ModalComponent>
    <div class="modal__image-container">
      <img :src="image" class="modal__image" />
      <div class="modal__overlay">
        <button @click="prevImage" class="modal__button modal__button--next">След.</button>
        <button @click="nextImage" class="modal__button modal__button--prev">Пред.</button>
      </div>
    </div>
    <button @click="() => $emit('close')" class="modal__button modal__button--close">
      Закрыть
    </button>
  </ModalComponent>
</template>

<script>
import ModalComponent from "@/components/parts/Modal";

export default {
  name: "HelpModal",
  components: {
    ModalComponent
  },
  props: {
    params: Object
  },
  data() {
    return {
      currentImage: this.params.index || 0
    }
  },
  computed: {
    image() {
      return this.params.images[this.currentImage]
    }
  },
  methods: {
    click(btn) {
      if (btn.click) {
        this.clickHandler(btn.click)
      }
      if (btn.afterClick) {
        this.clickHandler(btn.afterClick)
      }
    },
    clickHandler(click) {
      if (typeof click === 'string') {
        if (click === 'emitClose') {
          return this.$emit('close')
        }
      }
      return click()
    },
    nextImage() {
      if (this.currentImage < this.params.images.length - 1) {
        this.currentImage++
      } else {
        this.currentImage = 0
      }
    },
    prevImage() {
      if (this.currentImage > 0) {
        this.currentImage--
      } else {
        this.currentImage = this.params.images.length - 1
      }
    }
  }
}
</script>

<style scoped lang="less">
.modal {
  &__image-container {
    position: relative;
    width: 100%;
    /* adjust as needed */
    height: 100%;
    /* adjust as needed */
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    /* adjust as needed */
  }

  &__image {
    max-width: 600px;
  }

  &__button {
    background: rgba(255, 255, 255, 0.7);
    /* adjust as needed */
    border: none;
    padding: 10px;
    /* adjust as needed */
    cursor: pointer;
  }
}
</style>
