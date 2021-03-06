import type { AppRouteModule } from '/@/router/types';

import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant';
import { ExceptionEnum } from '/@/enums/exceptionEnum';

const ExceptionPage = () => import('/@/views/sys/exception/Exception');

const page: AppRouteModule = {
  path: '/page-demo',
  name: 'PageDemo',
  component: PAGE_LAYOUT_COMPONENT,
  redirect: '/page-demo/exception',
  meta: {
    icon: 'mdi:page-next-outline',
    title: '页面',
  },
  children: [
    // =============================result start=============================
    {
      path: '/result',
      name: 'ResultPage',
      redirect: '/page-demo/result/success',
      meta: {
        title: '结果页',
      },
      children: [
        {
          path: 'success',
          name: 'ResultSuccessPage',
          component: () => import('/@/views/demo/page/result/success/index.vue'),
          meta: {
            title: '成功页',
          },
        },
        {
          path: 'fail',
          name: 'ResultFailPage',
          component: () => import('/@/views/demo/page/result/fail/index.vue'),
          meta: {
            title: '失败页',
          },
        },
      ],
    },
    // =============================result end=============================

    // =============================exception start=============================
    {
      path: '/exception',
      name: 'ExceptionPage',
      redirect: '/page-demo/exception/404',
      meta: {
        title: '异常页',
      },
      children: [
        {
          path: '403',
          name: 'PageNotAccess',
          component: ExceptionPage,
          props: {
            status: ExceptionEnum.PAGE_NOT_ACCESS,
          },
          meta: {
            title: '403',
            afterCloseLoading: true,
          },
        },
        {
          path: '404',
          name: 'PageNotFound',
          component: ExceptionPage,
          props: {
            status: ExceptionEnum.PAGE_NOT_FOUND,
          },
          meta: {
            title: '404',
            afterCloseLoading: true,
          },
        },
        {
          path: '500',
          name: 'ServiceError',
          component: ExceptionPage,
          props: {
            status: ExceptionEnum.ERROR,
          },
          meta: {
            title: '500',
            afterCloseLoading: true,
          },
        },
        {
          path: 'net-work-error',
          name: 'NetWorkError',
          component: ExceptionPage,
          props: {
            status: ExceptionEnum.NET_WORK_ERROR,
          },
          meta: {
            title: '网络错误',
            afterCloseLoading: true,
          },
        },
        {
          path: 'not-data',
          name: 'NotData',
          component: ExceptionPage,
          props: {
            status: ExceptionEnum.PAGE_NOT_DATA,
          },
          meta: {
            title: '无数据',
            afterCloseLoading: true,
          },
        },
      ],
    },
    // =============================exception end=============================
  ],
};

export default page;
