import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'

Vue.use(Router)

const routerMap = [
  {path: '/', name: 'HelloWold', component: HelloWorld},
  {path: '/login', name: 'Login', component: Login}
];

export default new Router({
  routes: routerMap
})
