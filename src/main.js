import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import i18n from './i18n'






Vue.config.productionTip = false
//to set the language
router.beforeEach((to,from,next)=>{

  // use the language from routing params or default language 
 let language = to.params.lang;
 if(!language){
   language = 'en'
 }

 // set the current language for i18n

i18n.locale = language 
 next();
})

new Vue({
  store,
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
