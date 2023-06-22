import mainStore from 'store'
import { AxiosError } from 'axios'
import { TMessageError } from 'types/common'
import { openNotification } from '@sas/components-fe'
import { signOutRequest } from 'store/actions'

export class ApiError extends Error {
  message: string
  status: number
  errors: TMessageError[]

  constructor(message: string, status: number = 0) {
    super('')
    this.message = message
    this.name = 'ApiError'
    this.status = status
  }
}

export class ApiErrorForm extends Error {
  errors: TMessageError[]
  status: number

  constructor(message: TMessageError[], status: number = 0) {
    super('')
    this.errors = message
    this.name = 'ApiErrorForm'
    this.status = status
  }
}

export type TApiError = ApiError | ApiErrorForm

export const HandleResponseError = (
  error: AxiosError<{ message: string | TMessageError[] }>
) => {
  if (error.response?.status === 401) {
    mainStore.store.dispatch(signOutRequest())
  }

  if (typeof error?.response?.data?.message === 'object') {
    throw new ApiErrorForm(
      error.response.data.message as TMessageError[],
      error.response?.status
    )
  }

  const errorMessage =
    typeof error?.response?.data?.message === 'string'
      ? error.response.data.message
      : error?.message || 'Unknown'

  openNotification({
    notificationType: 'Error',
    message: errorMessage,
  })

  throw new ApiError(errorMessage, error?.response?.status || 400)
}
