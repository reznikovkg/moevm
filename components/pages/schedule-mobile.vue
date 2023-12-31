<template>
  <div>
    <div class="schedule schedule--desktop">
      <ScheduleTable :schedule="schedule"/>
    </div>
    <div class="schedule schedule--mobile">
      <ScheduleTableMobile :schedule="schedule"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import ScheduleTable from "../ScheduleTable.vue";
import ScheduleTableMobile from "../ScheduleTableMobile.vue";

export default {
  name: "ScheduleMobilePage",
  components: {
    ScheduleTable,
    ScheduleTableMobile
  },
  computed: {
    ...mapGetters('schedule', {
      schedule: "getSchedule"
    })
  }
}
</script>

<style lang="less" scoped>
.schedule--desktop {
  display: none;
}

.schedule--mobile {
  display: block;
}

@media (min-width: 768px) {
  .schedule--desktop {
    display: block;
  }

  .schedule--mobile {
    display: none;
  }
}
</style>
