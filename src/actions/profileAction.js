import EasyActions from 'redux-easy-actions'

const { Actions, Constants } = EasyActions({
  GET_USER_PROFILE_REQUEST(type, userId) {
    return { type, userId }
  },
  GET_USER_PROFILE_RESPONSE(type, payload) {
    return { type, payload }
  },
  GET_USER_PROFILE_ERROR(type, error) {
    return { type, error }
  },
})

export { Actions, Constants as ActionTypes }
