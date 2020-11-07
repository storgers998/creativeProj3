import Vue from "vue";
import VueRouter from "vue-router";
// import App from '../App.vue'
import Home from '../views/Home.vue'
import Coronavirus from "../views/Coronavirus.vue"
import Puns from "../views/Puns.vue"
import Churchjokes from "../views/Churchjokes.vue"
import Other from "../views/Other.vue"
import Submit from '../views/Submit.vue'

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Home",
  component: Home
},
{
  path: "/coronavirus",
  name: "Coronavirus",
  component: Coronavirus
},
{
  path: "/puns",
  name: "Puns",
  component: Puns
},
{
  path: "/churchjokes",
  name: "Churchjokes",
  component: Churchjokes
},
{
  path: "/other",
  name: "Other",
  component: Other
},
{
  path: "/submit",
  name: "Submit",
  component: Submit
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
