import React from 'react'
import { Link } from '../../components'
import { string } from 'prop-types'

const RepoCard = (props) => {
  const { title, description, language, updatedAt } = props

  return (
    <Link
      className='link-default'
      to={{ pathname: '/user-profile/benson7667/repoId' }}
    >
      <div className='card-view'>
        <h4 className='c-primary'>{title}</h4>
        <p className='f14 c-83 mt4'>{description}</p>
        <div className='flex fw3 f12 c-83 mt14'>
          <span>{language}</span>
          <span className='ml8 mr8 c-primary'>&#8226;</span>
          <span>{updatedAt}</span>
        </div>
      </div>
    </Link>
  )
}

RepoCard.propTypes = {
  description: string,
  language: string.isRequired,
  title: string.isRequired,
  updatedAt: string.isRequired,
}

export default RepoCard
