import { lmsHttp } from '@/utils/http/axios';
import { PageParam, Resp, Page, ProjectList } from '../model/genieModel';

enum Api {
  DEMO_LIST = '/project/list',
}

/**
 * @description: Get sample list value
 */

export const getProjectListApi = (params: PageParam) =>
  lmsHttp.post<Resp<Page<ProjectList>>>({
    url: Api.DEMO_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
