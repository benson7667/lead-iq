import React, { Component } from 'react'
import { UserCard } from '../../components'
import './styles.less'

class SearchResultPage extends Component {
  render() {
    return (
      <div className='search-result-container'>
        <div className='search-result-count'>
          <h1>121 users</h1>
        </div>

        <div className='search-result-list'>
          {new Array(10).fill('').map((card, index) => (
            <div className='search-result-item' key={index}>
              <UserCard
                avatarUrl='https://avatars2.githubusercontent.com/u/37457?s=200&v=4'
                location='Seattle, WA'
                loginName='Benson Toh'
              />
            </div>
          ))}
          <div className='search-result-item' />
          <div className='search-result-item' />
          <div className='search-result-item' />
        </div>
      </div>
    )
  }
}

export default SearchResultPage
