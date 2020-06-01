import React from 'react'
import { object } from 'prop-types'

const ProfileHeader = (props) => {
  const { profileInfo } = props
  const {
    avatar_url,
    name,
    login,
    public_repos,
    followers,
    following,
  } = profileInfo

  return (
    <section
      className='relative linear-gradient1 h150'
      style={{ marginBottom: '120px' }}
    >
      <div className='absolute flex' style={{ bottom: '-75px', left: '50px' }}>
        <img
          className='w150 h150 br20 mr20 shadow1 bg-white'
          src={avatar_url}
        />
        <div className='mt34'>
          <h1 className='c-white'>
            {login}
            {name && <span> &#40;{name}&#41; </span>}
          </h1>

          <div className='flex mt26'>
            <div className='flex flex-column item-center'>
              <div className='f14 c-83'>Respository</div>
              <p className='mt4 f18 fw5 c-83'>{public_repos}</p>
            </div>

            <div className='divider-vertical' />

            <div className='flex flex-column item-center'>
              <div className='f14 c-83'>Followers</div>
              <p className='mt4 f18 fw5 c-83'>{followers}</p>
            </div>

            <div className='divider-vertical' />

            <div className='flex flex-column item-center'>
              <div className='f14 c-83'>Following</div>
              <p className='mt4 f18 fw5 c-83'>{following}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProfileHeader.propTypes = {
  profileInfo: object,
}

export default ProfileHeader
