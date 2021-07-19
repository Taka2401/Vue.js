import Vue from 'vue'
import App from './App.vue'
import LikeNumber from "./components/LikeNumber.vue"
import router from "./router";
import store from "./store";
import axios from "axios";


Vue.config.productionTip = false

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/my-project-34927/databases/(default)/documents";

Vue.component('LikeNumber', LikeNumber);
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});
Vue.mixin({
  created() {
    console.log("global mixin");
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

