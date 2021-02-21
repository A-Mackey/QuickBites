import Vue from "vue";
import App from "./App.vue";
import * as firebase from "firebase";

Vue.config.productionTip = false;

const configOptions = {
    apiKey: "AIzaSyCNgWZTJaF5qgCN5eW0go4Hmgy6pSDj_9c",
    authDomain: "quickbitesproject.firebaseapp.com",
    projectId: "quickbitesproject",
    storageBucket: "quickbitesproject.appspot.com",
    messagingSenderId: "359911649540",
    appId: "1:359911649540:web:b13c3991d9b4157e436051",
    measurementId: "G-XLDCKEM615"
};

firebase.initializeApp(configOptions);

new Vue({
  render: h => h(App)
}).$mount("#app");