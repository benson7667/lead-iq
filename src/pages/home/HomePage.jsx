import React, { Component } from 'react'
import { object } from 'prop-types'
import { SearchBox } from '../../components'
import { constructQueryParams } from '../../utils/url'

class HomePage extends Component {
  handleSearch = (query) => {
    const queryString = constructQueryParams({ q: query })
    this.props.history.push({
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
}

export default HomePage
