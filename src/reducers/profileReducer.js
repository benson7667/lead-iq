import { ActionTypes } from '../actions/profileAction'

const defaultState = {
  error: null,
  isLoadingGetProfile: false,
  profileInfo: {},
  repos: [],
}

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        isLoadingGetProfile: true,
      }

    case ActionTypes.GET_USER_PROFILE_RESPONSE:
      return {
        ...state,
        isLoadingGetProfile: false,
        profileInfo: action.payload.profileInfo,
        repos: action.payload.repos,
      }

    case ActionTypes.GET_USER_PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoadingGetProfile: false,
      }

    default:
      return state
  }
}

export default profileReducer
