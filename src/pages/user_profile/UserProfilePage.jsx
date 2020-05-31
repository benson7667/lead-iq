import React, { Component } from 'react'
import Repos from './repos/Repos'
import ProfileHeader from './header/ProfileHeader'
import './styles.less'

class UserProfilePage extends Component {
  render() {
    return (
      <main className='mw960'>
        <ProfileHeader />
        <Repos />
      </main>
    )
  }
}

export default UserProfilePage
