<template>
  <div>
    <ScheduleTable :schedule="schedule"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import ScheduleTable from "@/components/main/schedule/ScheduleTable.vue";

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
