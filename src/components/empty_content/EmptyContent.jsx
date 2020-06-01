import React from 'react'
import { string } from 'prop-types'

const EmptyContent = (props) => {
  const { text, subText } = props
  return (
    <div className='w-100vw h-100vh flex justify-center item-center'>
      <div
        className='flex flex-column justify-center item-center pa20 pb30 shadow1'
        style={{ width: '500px', height: '200px' }}
      >
        <h1 className='c-83'>{text}</h1>
        <p className='mt14 c-83'>{subText}</p>
      </div>
    </div>
  )
}

EmptyContent.propTypes = {
  subText: string,
  text: string,
}

export default EmptyContent
