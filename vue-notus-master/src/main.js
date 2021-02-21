import Vue from "vue";
import VueRouter from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Donate from "@/views/admin/Donate.vue";
import Settings from "@/views/admin/Settings.vue";
import Search from "@/views/admin/Search.vue";
import Saved from "@/views/admin/Saved.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import AboutUs from "@/views/AboutUs.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";
import Recipe from "@/views/Recipe.vue";

//firebase 
import firebase from "firebase";//firebase/app
import 'firebase/auth'
import 'firebase/firestore'
import store from './store'
//firebase
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

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/donate",
    component: Admin,
    children: [
      {
        path: "/admin/donate",
        component: Donate,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/search",
        component: Search,
      },
      {
        path: "/admin/saved",
        component: Saved,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/aboutus",
    component: AboutUs,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/recipe",
    component: Recipe,
  },
  {
    path: "/",
    component: Index,
  },
  { path: "*", redirect: "/" },
];

// app config

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
