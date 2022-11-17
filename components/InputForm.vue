<template lang="pug">
.content
  v-form(v-model="valid")
    v-container(fluid)
      v-row
        v-col(cols="12" md="8")
          v-menu(
            ref='menu'
            v-model='menu'
            :close-on-content-click='false'
            :return-value.sync='items[0].value'
            transition='scale-transition'
            offset-y
            min-width='auto'
          )
            template(v-slot:activator='{ on, attrs }')
              v-text-field(
                v-model='items[0].value'
                label='日付'
                prepend-icon='mdi-calendar'
                readonly
                required
                v-bind='attrs'
                v-on='on'
              )
            v-date-picker(v-model='items[0].value' @input='$refs.menu.save(items[0].value)' no-title scrollable :day-format="date => new Date(date).getDate()")
      v-row(v-for="(item, index) in items" :key="index")
        v-col(cols="12" md="8")
          v-text-field(
            v-model="item.value"
            :rules="nameRules"
            :label='item.label'
            required
            v-if='item.id !== "date"'
          )
</template>

<script>
export default {
  name: 'InputPage',
  data: () => ({
    valid: false,
    items: [
      { id: 'date', label: '年月日', value: '' },
      { id: 'weight', label: '体重', value: 0 },
      { id: 'bmi', label: 'BMI', value: 0 },
      { id: 'bodyFatPer', label: '体脂肪率', value: 0 },
      { id: 'muscleMass', label: '筋肉量', value: 0 },
      { id: 'visceralFat', label: '内臓脂肪量', value: 0 },
    ],
    menu: false,
    inputs: {
      date: '',
      weight: 0,
      bmi: 0,
    },
    firstname: '',
    lastname: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  mounted() {
    this.items[0].value = this.$dayjs(new Date()).format('YYYY/MM/DD')
  },
}
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
