import { lmsHttp } from '@/utils/http/axios';
import { PageParam, Resp, Page, ServiceRunningVersionList } from '../model/genieModel';

enum Api {
  DEMO_LIST = '/service-running-version/list',
}

/**
 * @description: Get sample list value
 */

export const getServiceRunningVersionListApi = (params: PageParam) =>
  lmsHttp.post<Resp<Page<ServiceRunningVersionList>>>({
    url: Api.DEMO_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
