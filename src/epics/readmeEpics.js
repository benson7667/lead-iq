import { ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { ActionTypes, Actions } from '../actions/readmeAction'
import { getReadMeMarkdownApi } from '../apis'

export const getReadmeEpic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.GET_README_MARKDOWN_REQUEST),
    mergeMap((action) => {
      const { userId, repoId } = action.payload
      return from(getReadMeMarkdownApi({ userId, repoId })).pipe(
        mergeMap((data) => of(Actions.GET_README_MARKDOWN_RESPONSE(data))),
        catchError((error) => of(Actions.GET_README_MARKDOWN_ERROR(error)))
      )
    })
  )
