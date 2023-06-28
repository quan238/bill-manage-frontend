export type TMetadata = {
  languages: string[];
  timezone: string;
  requestId: string;
  path: string;
  version: string;
  repoVersion: string;
};

export type TApiReponse<T> = {
  statusCode: number;
  message: string;
  _metadata: TMetadata;
  data: T;
};

export type TGetReponse<T> = {
  data: T;
};

export type TCreateUpdateReponse = {
  data: {
    _id: string;
  };
};

export type TApiError = {
  message: string;
  property: string;
};

export type TApiErrorReponse = {
  _metadata: TMetadata;
  statusCode: number;
  message: string;
  errors?: TApiError[];
};
