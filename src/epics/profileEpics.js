import { ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { ActionTypes, Actions } from '../actions/profileAction'
import profileTransformer from '../transformer/profileTransformer'
import { getUserProfileApi } from '../apis'

export const getUserProfileEpic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.GET_USER_PROFILE_REQUEST),
    mergeMap((action) => {
      return from(getUserProfileApi(action.userId)).pipe(
        mergeMap((data) => {
          const transformed = profileTransformer.toState(data)
          return of(Actions.GET_USER_PROFILE_RESPONSE(transformed))
        }),
        catchError((error) => of(Actions.GET_USER_PROFILE_ERROR(error)))
      )
    })
  )
