import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue';
import RegisForm from '@/components/RegisForm.vue';
import CekStatus from '@/components/CekStatus.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/regis-form',
      name: 'RegisForm',
      component: RegisForm,
  
      path: '/cek-status',
      name: 'CekStatus',
      component: CekStatus,
    },
  ],
});

export default router;
