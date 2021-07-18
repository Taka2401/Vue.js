import Vue from 'vue' ;
import Router from 'vue-router';

const Home = () => import('./views/Home.vue');
const Users = () => import('./views/Users.vue');
const UsersPost = () => import('./views/UsersPost.vue');
const UsersProfile = () => import('./views/UsersProfile.vue');
const HeaderHome = () => import('./views/HeaderHome.vue');
const HeaderUsers = () => import('./views/HeaderUsers.vue');

Vue.use(Router);

export default new Router ({
  mode: "history",
  routes: [
  {
    path: '/', components: {
    default: Home,
    header: HeaderHome
    }
  },
  { path: '/users/:id',
    components: {
      default: Users,
      header: HeaderUsers
    },
    props: {
      default: true,
      header: false
    },
    children: [
      { path: "posts", component: UsersPost },
      { path: "Profile", component: UsersProfile, name: 'user-profile' }
    ]
  },
    {
      path: '*',
      redirect: '/'
    }
  ]
});