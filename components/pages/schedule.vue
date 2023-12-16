<template>
  <Page>
    <div class="d-flex mb-6" style="gap: 6px">
      <el-select v-model="type" placeholder="Тип">
        <el-option label="Для студента" value="st" />
        <el-option label="Для преподавателя" value="pr" />
      </el-select>
      <el-select v-if="type === 'st'" v-model="kurs" placeholder="Курс">
        <el-option label="МО 1" value="st" />
        <el-option label="РМ 2" value="pr" />
      </el-select>
      <el-select v-if="type === 'st' && kurs" v-model="group" placeholder="Группа" filterable>
        <el-option label="МО 1" value="st" />
        <el-option label="РМ 2" value="pr" />
      </el-select>
      <el-select v-if="type === 'pr'" v-model="prep" placeholder="Преподаватель" filterable>
        <el-option label="Иванов И. И." value="st" />
        <el-option label="Петров П. П." value="k" />
      </el-select>
    </div>

    <ScheduleTable :schedule="schedule"/>
  </Page>
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
  },
  data () {
    return {
      type: '',
      kurs: '',
      group: '',
      prep: '',
    }
  }
}
</script>
