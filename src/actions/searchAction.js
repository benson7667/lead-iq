import EasyActions from 'redux-easy-actions'

const { Actions, Constants } = EasyActions({
  SEND_SEARCH_REQUEST(type, data) {
    return { type, data }
  },
  RECEIVE_SEARCH_RESPONSE(type, payload, isLoadMore) {
    return { type, payload, isLoadMore }
  },
  SEARCH_ERROR(type, error) {
    return { type, error }
  },
})

export { Actions, Constants as ActionTypes }
