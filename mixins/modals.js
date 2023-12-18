import { mapMutations } from "vuex";
import PicturePreviewModal from "@/components/modals/PicturePreviewModal";

export const helpModal = {
  methods: {
    ...mapMutations('modals', [
      'openModal'
    ]),
    openPicturePreview (params) {
      this.openModal({
        component: PicturePreviewModal,
        params
      })
    }
  }
}
