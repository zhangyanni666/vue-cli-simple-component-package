import Vue from 'vue'
import Router from 'vue-router'
import cmpt from '@/pages/parentCmpt'
import showEditor from '@/pages/showEditor'
import buttonCmpt from '@/pages/button';
import breadCrumbCmpt from '@/pages/breadcrumb'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'breadCrumbCmpt',
      component: breadCrumbCmpt
    },
    {
      path: '/button',
      name: 'buttonCmpt',
      component: buttonCmpt
    },
    {
      path:'/cmpt',
      name:'parentCmpt',
      component:cmpt
    },
    {
      path:'/showEditor',
      name:'showEditor',
      component:showEditor
    },
  ]
})
