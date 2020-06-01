import React from 'react'
import { connect } from 'react-redux'
import UserProfilePage from './UserProfilePage'
import { Actions } from '../../actions/profileAction'

const UserProfilePageContainer = (props) => <UserProfilePage {...props} />

const mapStateToProps = (state) => ({
  profileInfo: state.profile.profileInfo,
  repos: state.profile.repos,
  isLoadingGetProfile: state.profile.isLoadingGetProfile,
  profileError: state.profile.error,
})

const mapDispatchToProps = {
  getUserProfile: Actions.GET_USER_PROFILE_REQUEST,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfilePageContainer)
