import { ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { ActionTypes, Actions } from '../actions/searchAction'
import { searchGithubUserApi } from '../apis'

export const searchGithubUserEpic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.SEND_SEARCH_REQUEST),
    mergeMap((action) => {
      const { data } = action
      const { isLoadMore, ...queryParam } = data

      return from(searchGithubUserApi(queryParam)).pipe(
        mergeMap((data) =>
          of(Actions.RECEIVE_SEARCH_RESPONSE(data, isLoadMore))
        ),
        catchError((error) => of(Actions.SEARCH_ERROR(error)))
      )
    })
  )
