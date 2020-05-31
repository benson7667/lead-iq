import React from 'react'
import { string } from 'prop-types'

import { Link } from '../../components'
import './styles.less'

const UserCard = (props) => {
  const { loginName, avatarUrl, location } = props

  return (
    <Link
      className='link-default'
      to={{ pathname: `/user-profile/${loginName}` }}
    >
      <div className='card-view flex'>
        <div className='w70 h70 overflow-hidden br-circle mr20'>
          <img className='user-card__avatar-img' src={avatarUrl} />
        </div>

        <div>
          <h4 className='mt10'>{loginName}</h4>
          <p className='mt4 f12 c-83'>{location}</p>
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
