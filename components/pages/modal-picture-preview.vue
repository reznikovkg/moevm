<template>
  <div>
    <h2>
      {{ pageTitle }}
    </h2>
    <img
      :src="images[0]"
      @click="() => openPicturePreview({ 'images': images, 'index': index })"
    />
  </div>
</template>

<script>
import { helpModal } from "@/mixins/modals";


export default {
  name: "ModalPicturePreviewPage",
  mixins: [helpModal],
  head () {
    return { title: "Modal picture preview" }
  },
  data () {
    return {
      images: [
        'https://avatars.mds.yandex.net/i?id=f2ea3c359c2a9372e891e4ba59b3f2b0-5859964-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=41ce3bd2aa7b0b88340c3cf8375cfd1da811a1e9_l-9147977-images-thumbs&n=13',
        'https://i.ytimg.com/vi/QguU0gENfxo/maxresdefault.jpg'
      ],
      index: 1
    }
  },
  computed: {
    pageTitle () {
      return this.$options.head().title
    }
  }
}
</script>

<style scoped></style>
