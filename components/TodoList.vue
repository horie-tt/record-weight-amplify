<template lang="pug">
v-list-item.todo
  v-list-item-content
    v-text-field(v-model="name" label="Name")
    v-text-field(v-model="description" label="Description")
    v-btn(@click="createTodo") Create
    v-data-table(:headers="headers" :items="todos" hide-default-footer)
      template(v-slot:item.updatedAt="props")
        td {{ $dayjs(props.item.updatedAt).format('YYYY/MM/DD HH:mm:ss') }}
</template>

<script>
import { API } from 'aws-amplify'
import { createTodo } from '~/src/graphql/mutations'
import { listTodos } from '~/src/graphql/queries'
import { onCreateTodo } from '~/src/graphql/subscriptions'

export default {
  data() {
    return {
      name: '',
      description: '',
      todos: [],
    }
  },
  computed: {
    headers() {
      return [
        { value: 'name', text: '名前' },
        { value: 'description', text: '備考' },
        { value: 'updatedAt', text: '更新日時' },
      ]
    },
  },
  created() {
    this.getTodos()
    this.subscribe()
  },
  methods: {
    async createTodo() {
      const { name, description } = this
      if (!name || !description) return false
      const todo = { name, description }
      await API.graphql({
        query: createTodo,
        variables: { input: todo },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
      this.name = ''
      this.description = ''
    },
    async getTodos() {
      const todos = await API.graphql({
        query: listTodos,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
      this.todos = todos.data.listTodos.items
    },
    subscribe() {
      API.graphql({
        query: onCreateTodo,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      }).subscribe({
        next: (eventData) => {
          const todo = eventData.value.data.onCreateTodo
          if (this.todos.some((item) => item.name === todo.name)) return // remove duplications
          this.todos = [...this.todos, todo]
        },
      })
    },
  },
}
</script>
