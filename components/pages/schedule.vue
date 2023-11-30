<template>
  <div>
    <ScheduleTable :schedule="schedule"/>
  </div>
</template>

<script>
import ScheduleTable from "../ScheduleTable.vue";
import { mapGetters } from "vuex"

export default {
  name: "SchedulePage",
  components: {
    ScheduleTable
  },
  computed: {
    ...mapGetters('schedule', {
      schedule: "getSchedule"
    })
  }
}
</script>
