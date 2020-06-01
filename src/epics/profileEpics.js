import { ofType } from 'redux-observable'
import { of, forkJoin } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { ActionTypes, Actions } from '../actions/profileAction'
import { transformApiToState } from '../transformer'
import { getUserProfileApi, getUserReposApi } from '../apis'

export const getUserProfileEpic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.GET_USER_PROFILE_REQUEST),
    mergeMap((action) => {
      return forkJoin([
        getUserProfileApi(action.userId),
        getUserReposApi(action.userId),
      ]).pipe(
        mergeMap((data) => {
          const profileTransformed = transformApiToState('profile')(data[0])
          const repoTransformed = data[1].map(transformApiToState('repo'))
          return of(
            Actions.GET_USER_PROFILE_RESPONSE({
              profileInfo: profileTransformed,
              repos: repoTransformed,
            })
          )
        }),
        catchError((error) => of(Actions.GET_USER_PROFILE_ERROR(error)))
      )
    })
  )
