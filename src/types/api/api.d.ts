export type TApiRoute = {
  uri: string;
  method: string;
};

export type TListAPI = Record<string, TApiRoute>;
