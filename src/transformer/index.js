import profileTransformer from './profileTransformer'
import repoTransformer from './repoTransformer'

export const transformApiToState = (type) => (data) => {
  switch (type) {
    case 'repo':
      return repoTransformer.toState(data)

    case 'profile':
      return profileTransformer.toState(data)

    default:
      return {}
  }
}

// TODO: add this when we need it
// export const transformStateToApi = (type) => (data) => {}
