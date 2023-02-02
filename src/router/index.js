import { createRouter, createWebHistory } from 'vue-router';
import UsersListContainer from '@/components/containers/UsersListContainer.vue';
import UserDetailsContainer from "@/components/containers/UserDetailsContainer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/users',
    },
    {
      path: '/users',
      name: 'users',
      component: UsersListContainer,
    },
    {
      path: '/users/:id',
      component: UserDetailsContainer,
      props: true,
    },
  ],
});

export default router;
