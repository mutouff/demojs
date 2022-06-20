import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AvueUeditor from 'avue-plugin-ueditor'; // 富文本


Vue.use(AvueUeditor) // 本人编辑器
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
