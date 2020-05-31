import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import profileReducer from './profileReducer'

const reducers = combineReducers({
  search: searchReducer,
  profile: profileReducer,
})

export default reducers
