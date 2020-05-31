import qs from 'qs'

export const constructQueryParams = (queryObj) =>
  qs.stringify(queryObj, { addQueryPrefix: true })
