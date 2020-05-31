import { ActionTypes } from '../actions/searchAction'

const defaultState = {
  isLoadingSearch: false,
  searchResult: [],
  totalCount: 0,
  error: null,
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SEND_SEARCH_REQUEST:
      return {
        ...state,
        isLoadingSearch: true,
      }

    case ActionTypes.RECEIVE_SEARCH_RESPONSE:
      return {
        ...state,
        isLoadingSearch: false,
        searchResult: action.isLoadMore
          ? [...state.searchResult, ...action.payload.items]
          : action.payload.items,
        totalCount: action.payload.total_count,
      }

    case ActionTypes.SEARCH_ERROR:
      return {
        ...state,
        isLoadingSearch: false,
        error: action.error,
      }

    default:
      return state
  }
}

export default userReducer
