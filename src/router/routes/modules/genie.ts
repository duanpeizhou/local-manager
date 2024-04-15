import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const genie: AppRouteModule = {
  path: '/genie',
  name: 'Genie',
  component: LAYOUT,
  redirect: '/genie/index',
  meta: {
    icon: 'simple-icons:opsgenie',
    title: t('routes.genie.genie'),
    orderNo: 11,
  },
  children: [
    {
      path: 'index',
      name: 'GenieMenu',
      component: () => import('@/views/genie/project/ProjectList.vue'),
      meta: {
        title: t('routes.genie.project'),
        ignoreKeepAlive: false,
      },
    },
    {
      path: 'service-running-version',
      name: 'ServiceVersion',
      component: () => import('@/views/genie/service/ServiceRunningVersionList.vue'),
      meta: {
        title: t('routes.genie.serviceVersion'),
        ignoreKeepAlive: false,
      },
    },
  ],
};

export default genie;
