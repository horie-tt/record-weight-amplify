<template lang="pug">
.content
  v-form(v-model="valid")
    v-container(fluid)
      //- v-row
      //-   v-col(cols="12" md="8")
      //-     v-menu(
      //-       ref='menu'
      //-       v-model='menu'
      //-       :close-on-content-click='false'
      //-       :return-value.sync='items[0].value'
      //-       transition='scale-transition'
      //-       offset-y
      //-       min-width='auto'
      //-     )
      //-       template(v-slot:activator='{ on, attrs }')
      //-         v-text-field(
      //-           v-model='items[0].value'
      //-           label='日付'
      //-           prepend-icon='mdi-calendar'
      //-           readonly
      //-           required
      //-           v-bind='attrs'
      //-           v-on='on'
      //-         )
      //-       v-date-picker(v-model='items[0].value' @input='$refs.menu.save(items[0].value)' no-title scrollable :day-format="date => new Date(date).getDate()")
      v-row(v-for="(item, index) in items" :key="index")
        v-col(cols="12" md="8")
          v-menu(
              ref='menu'
              v-model='menu'
              :close-on-content-click='false'
              :return-value.sync='item.value'
              transition='scale-transition'
              offset-y
              min-width='auto'
              v-if='item.id === "date"'
            )
              template(v-slot:activator='{ on, attrs }')
                v-text-field(
                  v-model='item.value'
                  label='日付'
                  prepend-icon='mdi-calendar'
                  readonly
                  required
                  v-bind='attrs'
                  v-on='on'
                )
              v-date-picker(v-model='item.value' @input='$refs.menu.save(item.value)' no-title scrollable :day-format="date => new Date(date).getDate()")

          v-text-field(
            v-model="item.value"
            :rules="nameRules"
            :label='item.label'
            required
            v-if='item.id !== "date"'
          )
      v-row
        v-col(cols="12" md="12")
          v-btn(@click="createWeight") Create
          v-data-table(:headers="headers" :items="weights" hide-default-footer)
            template(v-slot:item.date="props")
              td {{ $dayjs(props.item.date).format('YYYY/MM/DD') }}
            template(v-slot:item.updatedAt="props")
              td {{ $dayjs(props.item.updatedAt).format('YYYY/MM/DD HH:mm:ss') }}
</template>

<script>
import { API } from 'aws-amplify'
import { listWeights } from '@/src/graphql/queries'
import { createWeight } from '@/src/graphql/mutations'
import { onCreateWeight } from '@/src/graphql/subscriptions'

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
    weights: [],
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
  computed: {
    headers() {
      return [
        { value: 'date', text: '年月日' },
        { value: 'weight', text: '体重' },
        { value: 'bmi', text: 'BMI' },
        { value: 'bodyFatPer', text: '体脂肪率' },
        { value: 'muscleMass', text: '筋肉量' },
        { value: 'visceralFat', text: '内臓脂肪量' },
        { value: 'updatedAt', text: '更新日時' },
      ]
    },
  },
  mounted() {
    this.items[0].value = this.$dayjs(new Date()).format('YYYY/MM/DD')
  },
  created() {
    console.log('created!')
    this.getWeights()
    this.subscribe()
  },
  methods: {
    async createWeight() {
      console.log('create!!')
      const { items } = this
      if (!items) return false
      console.log(items)
      const weight = items.reduce((sum, item) => {
        return item.id === 'date'
          ? { ...sum, [item.id]: new Date(item.value) }
          : { ...sum, [item.id]: item.value }
      }, {})
      // const weight = { items }
      console.log(weight)
      await API.graphql({
        query: createWeight,
        variables: { input: weight },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
    },
    async getWeights() {
      const weights = await API.graphql({
        query: listWeights,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
      console.log(weights)
      this.weights = weights.data.listWeights.items
    },
    subscribe() {
      API.graphql({
        query: onCreateWeight,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      }).subscribe({
        next: (eventData) => {
          const weights = eventData.value.data.onCreateWeight
          if (this.weights.some((item) => item.id === weights.id)) return // remove duplications
          this.weights = [...this.weights, weights]
        },
      })
    },
  },
}
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
