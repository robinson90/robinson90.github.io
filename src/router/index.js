import Vue from 'vue'
import Router from 'vue-router'
const compLoader = (name) => (resolve) => require([`@/components/${name}`], resolve)
// const viewLoader = (name) => (resolve) => require([`@/pages/${name}`], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: compLoader('index')
    }
  ]
})
