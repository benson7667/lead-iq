import React, { Component } from 'react'
import { func, object, bool } from 'prop-types'
import Repos from './repos/Repos'
import ProfileHeader from './header/ProfileHeader'
import './styles.less'

class UserProfilePage extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props
    const userId = params.userId
    if (userId) {
      this.props.getUserProfile(userId)
    }
  }

  render() {
    const { isLoadingGetProfile, profileInfo, repos } = this.props

    if (isLoadingGetProfile) {
      return <div>Loading...</div>
    }

    return (
      <main className='mw960'>
        <ProfileHeader profileInfo={profileInfo} />
        <Repos repos={repos} />
      </main>
    )
  }
}

UserProfilePage.propTypes = {
  getUserProfile: func.isRequired,
  isLoadingGetProfile: bool.isRequired,
  match: object.isRequired,
  profileError: object,
  profileInfo: object.isRequired,
  repos: object,
}

export default UserProfilePage
