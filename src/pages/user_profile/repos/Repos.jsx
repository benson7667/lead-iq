import React from 'react'
import { RepoCard } from '../../../components'

const Repos = () => {
  return (
    <section className='ml50 mr50'>
      <h1 className='mb14'>Repositories</h1>
      <ul className='user-project-list'>
        <div className='user-project-item'>
          <RepoCard
            description='Assignment given by Binance'
            language='javascript'
            title='binance-assignment'
            updatedAt='2020-05-19T18:07:30Z'
          />
        </div>
      </ul>
    </section>
  )
}

export default Repos
