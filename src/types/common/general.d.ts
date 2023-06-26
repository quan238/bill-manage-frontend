export type TCreateResponse = {
  id: string;
};

export type TMutationOptions = {
  queryConfig?: Omit<
    UseMutationOptions<ResourceData, TApiError, SourceData>,
    "mutationKey" | "mutationFn"
  >;
};

export type TQueryOptions = {
  queryConfig?: Omit<
    UseQueryOptions<TQueryFnData, TApiError>,
    "queryKey" | "queryFn"
  >;
};

export type TMessageError = {
  [key: string]: string[];
};
