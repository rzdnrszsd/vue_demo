// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import 'normalize.css/normalize.css'
import store from './store'
import '@/icons'
import VCharts from 'v-charts'
import '@/styles/index.scss'
import '@/permission'


Vue.config.productionTip = false
Vue.use(ElementUI, {locale})
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
