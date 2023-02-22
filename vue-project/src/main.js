import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //Vuex 저장소 추가
import mixins from './mixins'
import i18nPlugin from './plugins/i18n'  //i18n 플러그인 추가 
//createApp(App).use(router).mount('#app')

const i18nStrings = {
    en: {
        hi: 'Hello!'
    },
    ko: {
        hi: '안녕하세요!'
    }
 }


const app =createApp(App)

app.use(router)
app.use(store)
app.mixin(mixins);
app.use(i18nPlugin, i18nStrings) //i18n 플러그인에 다국어 번역 데이터를 파라미터로 전달 
app.mount('#app')


 app.directive('focus', {
    mounted(el) {
        el.focus()
    }
 })


