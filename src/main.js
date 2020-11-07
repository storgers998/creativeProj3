import Vue from 'vue'
import App from './App.vue'
import mock from './mock-data.js'
import oldMock from '../starter-code/mock-data.js'
import diffMock from './diffmock-data.js'
import router from './router'

let data = {

  products: oldMock,
  cart: [],
  coronavirus: mock.coronavirus,
  churchjokes: mock.churchjokes,
  puns: mock.puns,
  otherjokes: [],
  currId: 0,
  addedJoke: '',
  alljokes:diffMock
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
