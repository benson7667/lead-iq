import { combineEpics } from 'redux-observable'
import * as searchEpics from './searchEpics'
import * as profileEpics from './profileEpics'
import * as readmeEpics from './readmeEpics'

const combineEpicFunctions = (epics) =>
  epics.reduce((arr, epic) => {
    let keys = Object.keys(epic)
    return arr.concat(keys.map((key) => epic[key]))
  }, [])

const epics = combineEpicFunctions([searchEpics, profileEpics, readmeEpics])

export const rootEpic = combineEpics(...epics)
