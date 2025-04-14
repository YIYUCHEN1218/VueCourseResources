import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './Pages/TeamsList.vue';
import UsersList from './Pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './Pages/NotFound.vue';
import TeamsFooter from './Pages/TeamsFooter.vue';
import UsersFooter from './Pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      /* component: TeamsList, */
      meta: { requiresAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      /*       alias: '/', */
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('UserbeforeEnter');
        console.log(to);
        console.log(from);
        next();
      },
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior(to, from, savedPosition) {
    console.log('ScrollBehavior');
    console.log(to);
    console.log(from);
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to);
  console.log(from);
  next();
  /* next(false); */
  /*   if (to.name === 'team-members') {
      next();
    } else {
      next({ name: 'team-members', params: { teamId: 't2' } });
    } */
});

router.afterEach(function (to, from) {
  console.log('Global afterEach');
  console.log(to);
  console.log(from);
});

export default router;
