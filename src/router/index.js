import { createRouter, createWebHistory } from 'vue-router';
import userListRouter from '@/entities/user-list/user-list.router';
import userDetailsRouter from '@/entities/user-details/user-details.router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/users',
    },
    ...userListRouter,
    ...userDetailsRouter,
  ],
});

export default router;
