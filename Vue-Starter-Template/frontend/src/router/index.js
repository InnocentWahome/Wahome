import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Landing from '../components/Landing.vue'
import Sidenav from '../components/Sidenav.vue'
import Dashboard from '../components/Dashboard.vue'
import Teams from '../components/Teams.vue'
import Settings from '../components/Settings.vue'
import Calendar from '../components/Calendar.vue'
import Documentation from '../components/Documentation.vue'
import Estimations from '../components/Estimations.vue'
import Reports from '../components/Reports.vue'
import Projects from '../components/Projects.vue'
import Mail from '../components/Mail.vue'
import Notifications from '../components/Notifications.vue'
import Tasks from '../components/Tasks.vue'
import Register from '../components/Register.vue'
import Signin from '../components/Signin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Sigin',
    component: Signin
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  { 
    path: '/sidenav',
    name: 'Sidenav',
    component: Sidenav 
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard 
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: Documentation
  },
  {
    path: '/estimations',
    name: 'Estimations',
    component: Estimations
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/mail',
    name: 'Mail',
    component: Mail
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
