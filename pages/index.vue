<template lang="pug">
amplify-authenticator
  amplify-sign-in(slot="sign-in" :hide-sign-up="true")
  v-row(justify="center" align="center")
    v-col(cols="12" sm="8" md="6")
      v-card
        v-row.title(color="red darken-1" class="mb-6 pa-2" no-gutters)
          v-col(cols="12" md="2")
            v-layout(wrap)
              v-img.img(src="mona-loading-default.gif" max-width="72")
          v-col(cols="12" md="10")
            v-card-title.headline
              | Record Your Weight!!
        v-card-text
          //- InputForm
          TodoList
        v-card-actions
          v-spacer
          v-btn(color="primary" nuxt to="/inspire") Continue
      amplify-sign-out
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
.img {
  object-fit: cover;
  max-height: 100%;
}
</style>
