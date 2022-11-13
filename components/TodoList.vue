<template lang="pug">
.todo
  h1 TodoApp
  v-text-field(v-model="name" label="Name")
  v-text-field(v-model="description" label="Description")
  v-btn(@click="createTodo") Create
  v-data-table(:headers="headers" :items="todos" hide-default-footer)
    template(v-slot:item.updatedAt="props")
      td {{ dateFormat(props.item.updatedAt) }}

  //- ul.mt-2
  //-   li(v-for="todo in todos" :key="todo.id")
  //-     | {{ todo.name }} : {{ todo.description }} {{ dateFormat(todo.updatedAt) }}
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
    dateFormat(date) {
      const dt = new Date(date)
      return dt.toLocaleString()
    },
    async createTodo() {
      const { name, description } = this
      if (!name || !description) return false
      const todo = { name, description }
      await API.graphql({
        query: createTodo,
        variables: { input: todo },
      })
      this.name = ''
      this.description = ''
      // this.getTodos()
    },
    async getTodos() {
      const todos = await API.graphql({
        query: listTodos,
      })
      this.todos = todos.data.listTodos.items
    },
    subscribe() {
      API.graphql({ query: onCreateTodo }).subscribe({
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
