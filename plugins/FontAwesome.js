import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas)
