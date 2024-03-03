export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}

export interface PageParam {
  current: number;
  size: number;
}

export interface Resp<T> {
  code: number;
  message: string;
  data: T;
}

export interface Page<T> {
  records: T[];
  total: number;
  size: number;
  current: number;
  pages: number;
}

export interface ProjectList {
  id: number;
  name: string;
  gitWebUrl: string;
}
