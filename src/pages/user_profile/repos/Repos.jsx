import React from 'react'
import { array } from 'prop-types'
import { RepoCard } from '../../../components'
import { formatDateAgo } from '../../../utils/dateTime'

const Repos = (props) => {
  const { repos } = props

  return (
    <section className='ml50 mr50'>
      <h1 className='mb14'>Repositories</h1>
      <ul className='user-project-list'>
        {repos.map((repo) => {
          const { id, repoName, description, language, updatedAt } = repo
          return (
            <div className='user-project-item' key={id}>
              <RepoCard
                description={description}
                language={language}
                title={repoName}
                updatedAt={formatDateAgo(updatedAt)}
              />
            </div>
          )
        })}
      </ul>
    </section>
  )
}

Repos.propTypes = {
  repos: array.isRequired,
}

export default Repos
