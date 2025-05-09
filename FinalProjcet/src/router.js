import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
/* import CoachDetail from "./pages/CoachDetail.vue"; */
import CoachesList from "./pages/CoachesList.vue";
/* import CoachRegistration from "./pages/CoachRegistration.vue"; */
/* import ContactCoach from "./pages/ContactCoach.vue"; */
/* import RequestsReceived from "./pages/RequestsReceived.vue"; */
/* import UserAuth from "./pages/UserAuth.vue"; */
import NotFound from "./pages/NotFound.vue";
import store from "./store/index.js";

const CoachDetail = defineAsyncComponent(() => import("./pages/CoachDetail.vue"));
const CoachRegistration = defineAsyncComponent(() => import("./pages/CoachRegistration.vue"));
const UserAuth = defineAsyncComponent(() => import("./pages/UserAuth.vue"));
const ContactCoach = defineAsyncComponent(() => import("./pages/ContactCoach.vue"));
const RequestsReceived = defineAsyncComponent(() => import("./pages/RequestsReceived.vue"));

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      component: CoachesList,
    },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [{ path: "contact", component: ContactCoach }], // /coaches/id/contact
    },
    {
      path: "/register",
      component: CoachRegistration,
      meta: { requireAuth: true },
    },
    {
      path: "/requests",
      component: RequestsReceived,
      meta: { requireAuth: true },
    },
    {
      path: "/auth",
      component: UserAuth,
      meta: { requireUnAuth: true },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.meta.requireAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requireUnAuth && store.getters.requireUnAuth) {
  } else {
    next();
  }
});

export default router;
