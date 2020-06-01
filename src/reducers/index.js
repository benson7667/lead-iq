import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import profileReducer from './profileReducer'
import readmeReducer from './readmeReducer'

const reducers = combineReducers({
  search: searchReducer,
  profile: profileReducer,
  readme: readmeReducer,
})

export default reducers
