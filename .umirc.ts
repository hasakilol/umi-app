import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  icons: { autoInstall: {} },
  layout: false,
  // layout: {
  //   title: '@umijs/max',
  // },
  routes: [
    {
      path: '/',
      // component: '@/layouts/CustomProLayout',
      // wrappers: ['@/wrappers/Auth'],
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      access: 'canAccessHome',

      routes: [
        {
          name: 'Ye',
          path: '/home/ye',

          component: '@/pages/YeTest',
          footerRender: false,
          menuRender: false,
          // headerRender: false,
        },
      ],
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
      wrappers: ['@/wrappers/Auth'],
      icon: 'local:hat-svgrepo-com',
    },
    {
      name: 'CRUD 示例',
      path: '/table',
      component: './Table',
      access: 'canAccessTable',
    },
    {
      name: 'Form 试验场',
      path: '/form',
      component: './FormPlay',
    },
    {
      name: 'Ref Callback 试验场',
      path: '/refcallback',
      component: './RefCallbackPlay',
    },
    {
      name: 'Postion: Sticky 试验场',
      path: '/sticky',
      component: './StickyPlay',
    },
    {
      name: 'Width 试验场',
      path: '/width',
      component: './WidthPlay',
    },
    {
      name: 'Encode/Decode 试验场',
      path: '/encode-decode',
      component: './EncodeDecodePlay',
    },
  ],
  npmClient: 'npm',
  writeToDisk: true,
});
