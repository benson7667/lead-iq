import { get } from '../utils/net'

export const searchGithubUserApi = (data) => {
  const { q, page = 1, per_page = 30 } = data
  return get('/search/users', { params: { q, page, per_page } }).then(
    (res) => res.data
  )
}
