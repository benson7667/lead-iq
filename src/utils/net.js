import axios from 'axios'
import config from '../config'

const agent = axios.create({
  baseURL: config.apiHost,
  data: {
    client_id: config.clientId,
    client_secret: config.clientSecret,
  },
})

const get = (uri, options = {}) => agent.get(uri, options)

const post = (uri, data = {}, config = {}) => agent.post(uri, data, config)

const put = (uri, data = {}, config = {}) => agent.put(uri, data, config)

const del = (uri, data = {}, config = {}) => agent.delete(uri, data, config)

export { get, post, put, del }
