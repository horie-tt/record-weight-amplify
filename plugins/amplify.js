import Vue from 'vue'
import { Amplify } from 'aws-amplify'
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader'
import awsExports from '~/src/aws-exports'

Amplify.configure(awsExports)
applyPolyfills().then(() => {
  defineCustomElements(window)
})
Vue.use(Amplify)
