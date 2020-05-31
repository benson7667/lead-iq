import React, { Component } from 'react'
import { object } from 'prop-types'
import { SearchBox } from '../../components'
import { constructQueryParams } from '../../utils/url'
import { SEARCH_RESULT_ROUTE } from '../../constants/routes'
import './styles.less'

class HomePage extends Component {
  handleSearch = (query) => {
    const queryString = constructQueryParams({ q: query })
    this.props.history.push({
      pathname: SEARCH_RESULT_ROUTE,
      search: queryString,
    })
  }

  render() {
    return (
      <div className='home-container'>
        <SearchBox onSearch={this.handleSearch} />
      </div>
    )
  }
}

HomePage.propTypes = {
  history: object,
}

export default HomePage
