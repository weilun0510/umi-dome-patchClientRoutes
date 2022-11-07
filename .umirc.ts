export default {
  npmClient: 'pnpm',
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: './index',
        },
        {
          path: '/docs',
          component: './docs',
        },
      ]
    }
  ]
};
