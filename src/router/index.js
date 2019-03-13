import Vue from 'vue'
import Router from 'vue-router'
import Textcontent from '@/components/Textcontent'
import Book from '@/components/Book'
import Index from '@/components/Index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/",
      name:"Index",
      component: Index
    },
    {
      path: '/textcontent',
      name: 'textcontent',
      component: Textcontent
    },
    {
      path: '/Book',
      name: 'Book',
      component: Book
    }

  ]
})
