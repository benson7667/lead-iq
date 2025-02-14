import EasyActions from 'redux-easy-actions'

const { Actions, Constants } = EasyActions({
  GET_README_MARKDOWN_REQUEST(type, payload) {
    return { type, payload }
  },
  GET_README_MARKDOWN_RESPONSE(type, payload) {
    return { type, payload }
  },
  GET_README_MARKDOWN_ERROR(type, error) {
    return { type, error }
  },
  CLEAN_README_MARKDOWN(type) {
    return { type }
  },
})

export { Actions, Constants as ActionTypes }
