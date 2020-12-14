import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//import Vue from 'vue' ;

import VueChatScroll from "vue-chat-scroll"



createApp(App)
  .use(router)
  .use(VueChatScroll)
  .mount("#app");

