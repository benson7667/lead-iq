import React from 'react'

const ProfileHeader = () => {
  return (
    <section
      className='relative linear-gradient1 h150'
      style={{ marginBottom: '120px' }}
    >
      <div className='absolute flex' style={{ bottom: '-75px', left: '50px' }}>
        <img
          className='w150 h150 br20 mr20 shadow1'
          src='https://avatars0.githubusercontent.com/u/50561286?s=460&v=4'
        />
        <div className='mt34'>
          <h1 className='c-white'>Benson Toh</h1>

          <div className='flex mt26'>
            <div className='flex flex-column item-center'>
              <div className='f14 c-83'>Respository</div>
              <p className='mt4 f18 fw5 c-83'>28</p>
            </div>

            <div className='divider-vertical' />

            <div className='flex flex-column item-center'>
              <div className='f14 c-83'>Followers</div>
              <p className='mt4 f18 fw5 c-83'>388</p>
            </div>

            <div className='divider-vertical' />

            <div className='flex flex-column item-center'>
              <div className='f14 c-83'>Following</div>
              <p className='mt4 f18 fw5 c-83'>292</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileHeader
