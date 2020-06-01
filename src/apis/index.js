import { get } from '../utils/net'
import config from '../config'

// search
export const searchGithubUserApi = (data) => {
  const { q, page = 1, per_page = 30 } = data
  return get('/search/users', { params: { q, page, per_page } }).then(
    (res) => res.data
  )
}

// user profile
export const getUserProfileApi = (userId) =>
  get(`/users/${userId}`).then((res) => res.data)

// user repositories
export const getUserReposApi = (userId) =>
  get(`/users/${userId}/repos`, { params: { sort: 'updated' } }).then(
    (res) => res.data
  )

// repository readme
export const getReadMeMarkdownApi = (data) => {
  const { userId, repoId } = data
  return get(`/${userId}/${repoId}/master/README.md`, {
    baseURL: config.markDownApiHost,
  }).then((res) => res.data)
}
