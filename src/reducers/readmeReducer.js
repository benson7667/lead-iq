import { ActionTypes } from '../actions/readmeAction'

const defaultState = {
  error: null,
  isLoadingGetReadmeMarkdown: false,
  readmeMarkdown: '',
}

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_README_MARKDOWN_REQUEST:
      return {
        ...state,
        isLoadingGetReadmeMarkdown: true,
      }

    case ActionTypes.GET_README_MARKDOWN_RESPONSE:
      return {
        ...state,
        isLoadingGetReadmeMarkdown: false,
        readmeMarkdown: action.payload,
      }

    case ActionTypes.GET_README_MARKDOWN_ERROR:
      return {
        ...state,
        error: action.error,
        isLoadingGetReadmeMarkdown: false,
      }

    case ActionTypes.CLEAN_README_MARKDOWN:
      return defaultState

    default:
      return state
  }
}

export default profileReducer
