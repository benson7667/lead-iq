import React from 'react'
import { string } from 'prop-types'
import { Link } from '../../components'
import './styles.less'

const UserCard = (props) => {
  const { loginName, avatarUrl, location } = props

  return (
    <Link className='link-default' to={{ pathname: '/user' }}>
      <div className='user-card'>
        <div className='user-card__avatar-wrapper'>
          <img className='user-card__avatar-img' src={avatarUrl} />
        </div>

        <div>
          <h4 className='user-card__username'>{loginName}</h4>
          <p className='user-card__location'>{location}</p>
        </div>
      </div>
    </Link>
  )
}

UserCard.propTypes = {
  avatarUrl: string,
  location: string,
  loginName: string.isRequired,
}

export default UserCard
