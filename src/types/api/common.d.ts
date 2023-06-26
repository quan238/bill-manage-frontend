export type TApiReponse<T> = {
  statusCode: number;
  message: string;
  _metadata: {
    languages: string[];
    timezone: string;
    requestId: string;
    path: string;
    version: string;
    repoVersion: string;
  };
  data: T;
};
