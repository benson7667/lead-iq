import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from '../../components'
import { object, string } from 'prop-types'

const RepoCard = (props) => {
  const {
    title,
    description,
    language,
    updatedAt,
    match: { params },
  } = props

  return (
    <Link
      className='link-default'
      to={{ pathname: `/user-profile/${params.userId}/${title}` }}
    >
      <div className='card-view flex'>
        <div className='flex1'>
          <h4 className='c-primary'>{title}</h4>
          <p className='f14 c-83 mt4'>{description}</p>
          <div className='flex fw3 f12 c-83 mt14'>
            {language && (
              <>
                <span>{language}</span>
                <span className='ml8 mr8 c-primary'>&#8226;</span>
              </>
            )}
            <span>{`Updated ${updatedAt}`}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

RepoCard.propTypes = {
  description: string,
  language: string.isRequired,
  match: object,
  title: string.isRequired,
  updatedAt: string.isRequired,
  userId: string,
}

export default withRouter(RepoCard)
