import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBindingHtmlView from '../views/DataBindingHtmlView.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
import DataBindingTextarea from '../views/DataBindingTextarea.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheckbox from '../views/DataBindingCheckbox.vue'
import DataBindingRadio from '../views/DataBindingRadio.vue'
import DataBindingAttribute from '../views/DataBindingAttribute.vue'
import DataBindingButton from '../views/DataBindingButton.vue'
import DataBindingClassView from '../views/DataBindingClassView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databindingHtmlView',
    name: 'DataBinding2',
    component: DataBindingHtmlView
  },
  {
    path: '/databindingInputText',
    name: 'DataBinding3',
    component: DataBindingInputText
  },
  {
    path: '/databindingInputNumber',
    name: 'DataBinding4',
    component: DataBindingInputNumber
  },
  {
    path: '/databindingTextarea',
    name: 'DataBinding5',
    component: DataBindingTextarea
  },
  {
    path: '/databindingSelect',
    name: 'DataBinding6',
    component: DataBindingSelect
  },
  {
    path: '/databindingCheckbox',
    name: 'DataBinding7',
    component: DataBindingCheckbox
  },
  {
    path: '/databindingRadio',
    name: 'DataBinding8',
    component: DataBindingRadio
  },
  {
    path: '/databindingAttribute',
    name: 'DataBinding9',
    component: DataBindingAttribute
  },
  {
    path: '/databindingButton',
    name: 'DataBinding10',
    component: DataBindingButton
  },
  {
    path: '/databindingClassView',
    name: 'DataBinding11',
    component: DataBindingClassView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
