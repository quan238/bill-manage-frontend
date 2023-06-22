import { REST_API_USER } from 'config'
import { TApiError } from 'api/errors'
import { TUserProfileResponse } from 'types/models'
import { getProfile } from 'api'
import { useQuery } from 'react-query'

export function useGetProfile(enabled?: boolean) {
  return useQuery<TUserProfileResponse, TApiError>(
    [...Object.values(REST_API_USER.GET_PROFILE)],
    getProfile,
    {
      keepPreviousData: true,
      enabled,
    }
  )
}
