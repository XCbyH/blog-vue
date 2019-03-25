import Vue from 'vue'
import Router from 'vue-router'
import Textcontent from '@/components/Textcontent'
import Book from '@/components/Book'
import Index from '@/components/Index'
import BuildingPage from '@/components/BuildingPage'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/index",
      name:"index",
      component: Index
    },
    {
      path: '/textcontent',
      name: 'textcontent',
      component: Textcontent
    },
    {
      path: '/',
      name: 'buildingPage',
      component: BuildingPage
    },
    {
      path: '/Book',
      name: 'Book',
      component: Book
    }

  ]
})
