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

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Saved from "@/views/admin/Saved.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";
import Recipe from "@/views/Recipe.vue";

//firebase 
import firebase from "firebase";//firebase/app
import 'firebase/auth'
import 'firebase/firestore'

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
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
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
    path: "/landing",
    component: Landing,
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
  render: (h) => h(App),
}).$mount("#app");
