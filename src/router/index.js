import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/Create'
import Whole from '@/components/Whole'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect:'/journal/whole'
    },
    {
      path: '/journal/whole',
      name: 'Whole',
      component:Whole
    },
    {
      path: '/journal/create',
      name: 'Create',
      component:Create
    },
    {
      path: '/journal/:id/edit',
      name: 'Edit',
      component:Edit
    }
  ]
})
