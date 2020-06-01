import React, { Component } from 'react'
import { array, func, object, bool } from 'prop-types'
import { DotLoader } from '../../components'
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
      return <DotLoader color='#000' fullPage radius={10} />
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
  repos: array,
}

export default UserProfilePage
