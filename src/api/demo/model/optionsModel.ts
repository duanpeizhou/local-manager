import { BasicFetchResult } from '@/api/model/genieModel';

export interface DemoOptionsItem {
  name: string;
  id: string;
}

export interface selectParams {
  id: number | string;
}

/**
 * @description: Request list return value
 */
export type DemoOptionsGetResultModel = BasicFetchResult<DemoOptionsItem>;
