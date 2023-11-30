<template>
  <div>
    <ScheduleTable :schedule="schedule"/>
  </div>
</template>

<script>
import DayCard from "../DayCard.vue"
import ScheduleTable from "../ScheduleTable.vue";
import { mapGetters } from "vuex"

export default {
  name: "SchedulePage",
  components: {
    DayCard,
    ScheduleTable
  },
  computed: {
    ...mapGetters('schedule', {
      schedule: "getSchedule"
    })
  }
}
</script>
