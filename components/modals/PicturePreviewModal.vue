<template>
  <ModalComponent>
    <div class="modal__image-container">
      <img :src="image" class="modal__image" />
      <div v-if="params.images.length > 1" class="modal__overlay">
        <button @click="() => prevImage()" class="modal__button modal__button--next">След.</button>
        <button @click="() => nextImage()" class="modal__button modal__button--prev">Пред.</button>
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
  name: "PicturePreviewModal",
  components: {
    ModalComponent
  },
  props: {
    params: Object
  },
  data () {
    return {
      currentImage: this.params.index || 0
    }
  },
  computed: {
    image () {
      return this.params.images[this.currentImage]
    }
  },
  methods: {
    nextImage () {
      if (this.currentImage < this.params.images.length - 1) {
        this.currentImage++
      } else {
        this.currentImage = 0
      }
    },
    prevImage () {
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
    height: 100%;
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
  }

  &__image {
    max-width: 600px;
  }

  &__button {
    background: rgba(255, 255, 255, 0.7);
    border: none;
    padding: 10px;
    cursor: pointer;
  }
}
</style>
