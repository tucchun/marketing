import dynamic from 'dva/dynamic';
import Template from 'router/TemplateContainer';

const userRouterConfig = (args) => {
  return {
    path: '/admin/marketing-manage/onlineCoupon',
    component: Template,
    routes: [
      {
        path: '',
        exact: true,
        component: dynamic({
          app: args.app,
          models: () => [],
          component: () => import('./MarketingContainer'),
        }),
      },
      {
        path: '/info',
        component: dynamic({
          app: args.app,
          models: () => [],
          component: () => import('./MarketingInfoContainer'),
        }),
      },
      {
        path: '/add',
        name: '新增线上券',
        component: dynamic({
          app: args.app,
          models: () => [],
          component: () => import('./MarketingAddContainer'),
        }),
      },
    ],
  };
};
export default userRouterConfig;
