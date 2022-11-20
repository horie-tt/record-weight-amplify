<template lang="pug">
amplify-authenticator
  amplify-sign-in(slot="sign-in" :hide-sign-up="true")
  v-row(justify="center" align="center")
    v-col(cols="12" sm="8" md="6")
      v-card
        v-card-title.title(class="mb-6 pa-2")
          v-row(color="red darken-1" class="" no-gutters)
            v-col(cols="12" md="2")
              v-layout(wrap)
                v-img.img(src="mona-loading-default.gif" max-width="72")
            v-col(cols="12" md="10")
              .headline {{ tabTitle[tabs]['title'] }}
        v-list-item
          v-tabs(v-model="tabs" grow)
            v-tab(v-for="tab in tabTitle" :key="tab.item") {{ tab.value }}
            v-tab-item
              TodoList
            v-tab-item
              InputForm
        v-card-actions
          v-spacer
          v-btn(color="primary" nuxt to="/inspire") Continue
      amplify-sign-out
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      tabs: 0,
      tabTitle: [
        { item: 'todo', value: 'ToDoリスト', title: 'Manage ToDo!!' },
        {
          item: 'record',
          value: 'レコーディング',
          title: 'Record Your Weight!!',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.img {
  object-fit: cover;
  max-height: 100%;
}
</style>
