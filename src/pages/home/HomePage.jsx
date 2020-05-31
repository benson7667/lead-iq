import React, { Component } from 'react'
import { object, func } from 'prop-types'
import { SearchBox } from '../../components'
import { constructQueryParams } from '../../utils/url'

class HomePage extends Component {
  handleSearch = (query) => {
    const { searchGithubUser, history } = this.props
    const queryString = constructQueryParams({ q: query })

    searchGithubUser({ q: query })
    history.push({
      pathname: '/search-result',
      search: queryString,
    })
  }

  render() {
    return (
      <div className='flex justify-center item-center mt100'>
        <SearchBox onSearch={this.handleSearch} />
      </div>
    )
  }
}

HomePage.propTypes = {
  history: object,
  searchGithubUser: func.isRequired,
}

export default HomePage
