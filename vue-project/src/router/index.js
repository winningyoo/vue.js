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
import DataBindingClassView2 from '../views/DataBindingClassView2.vue'
import DataBindingStyle from '../views/DataBindingStyle.vue'
import DataBindingList from '../views/DataBindingList.vue'
import RenderingVif from '../views/RenderingVif.vue'
import EventClick from '../views/EventClick.vue'
import EventChange from '../views/EventChange.vue'
import ComputedView from '../views/ComputedView.vue'
import WatchView from '../views/WatchView.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
import ParentComponent2 from '../views/ParentComponent2.vue'
import ParentComponent3 from '../views/ParentComponent3.vue'
import ParentComponent4 from '../views/ParentComponent4.vue'
import ParentComponent5 from '../views/ParentComponent5.vue'
import ProvidelnjectView from '../views/ProvidelnjectView.vue'
import CompositionAPI2 from '../views/CompositionAPI2.vue'
import CompositionAPI3 from '../views/CompositionAPI3.vue'
import CompositionAPIProvide from '../views/CompositionAPIProvide.vue'
import MixinsView from '../views/MixinsView.vue'
import Component from '../views/Component.vue'
import PluginsView from '../views/PluginsView.vue'
import StoreAccess from '../views/StoreAccess.vue'
import KakaoLogin from '../views/KakaoLogin.vue'
import NaverLogin from '../views/NaverLogin.vue'
import GoogleLogin from '../views/GoogleLogin.vue'


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
    name: 'DataBindingClassView',
    component: DataBindingClassView
  },
  {
    path: '/databindingClassView2',
    name: 'DataBindingClassView2',
    component: DataBindingClassView2
  },
  {
    path: '/databindingStyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/databindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/renderingVif',
    name: 'RenderingVif',
    component: RenderingVif
  },
  {
    path: '/eventClick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventChange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/computedView',
    name: 'ComputedView',
    component: ComputedView
  },
  {
    path: '/watchView',
    name: 'WatchView',
    component: WatchView
  },
  {
    path: '/nestedComponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/parentComponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/parentComponent2',
    name: 'ParentComponent2',
    component: ParentComponent2
  },
  {
    path: '/parentComponent3',
    name: 'ParentComponent3',
    component: ParentComponent3
  },
  {
    path: '/parentComponent4',
    name: 'ParentComponent4',
    component: ParentComponent4
  },
  {
    path: '/parentComponent5',
    name: 'ParentComponent5',
    component: ParentComponent5
  },
  {
    path: '/providelnjectView',
    name: 'ProvidelnjectView',
    component: ProvidelnjectView
  },
  {
    path: '/compositionAPI2',
    name: 'CompositionAPI2',
    component: CompositionAPI2
  },
  {
    path: '/compositionAPI3',
    name: 'CompositionAPI3',
    component: CompositionAPI3
  },
  {
    path: '/compositionAPIProvide',
    name: 'CompositionAPIProvide',
    component: CompositionAPIProvide
  },
  {
    path: '/mixinsView',
    name: 'MixinsView',
    component: MixinsView
  },
  {
    path: '/component',
    name: 'Component',
    component: Component
  },
  {
    path: '/pluginsView',
    name: 'PluginsView',
    component: PluginsView
  },
  {
    path: '/storeAccess',
    name: 'StoreAccess',
    component: StoreAccess
  },
  {
    path: '/kakaologin'
  },
  {
    path: '/kakaoLogin',
    name: 'KakaoLogin',
    component: KakaoLogin
  },
  {
    path: '/naverLogin',
    name: 'NaverLogin',
    component: NaverLogin
  },
  {
    path: '/googleLogin',
    name: 'GoogleLogin',
    component: GoogleLogin
  }
 

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


