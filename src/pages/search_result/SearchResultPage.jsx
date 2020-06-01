import React, { Component } from 'react'
import { array, bool, object, func, number } from 'prop-types'
import { Button, UserCard, DotLoader } from '../../components'
import { parseQueryString } from '../../utils/url'
import './styles.less'

class SearchResultPage extends Component {
  state = { page: 1, per_page: 30 }

  componentDidMount() {
    const { searchResult, location } = this.props
    // user probably refresh the page, refetch data based on query string
    const query = parseQueryString(location)
    if (query && query.q && !searchResult.length) {
      this.queryGithubUser()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state

    // load next page data
    if (prevState.page !== page && page > prevState.page) {
      this.queryGithubUser(true)
    }
  }

  queryGithubUser = (isLoadMore = false) => {
    const { location, searchGithubUser } = this.props
    const { page, per_page } = this.state
    const { q } = parseQueryString(location)
    searchGithubUser({ q, page, per_page, isLoadMore })
  }

  handleLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }))
  }

  shouldRenderLoadMoreButton = () => {
    const { searchTotalCount, searchResult } = this.props
    return searchResult && searchResult.length < searchTotalCount
  }

  renderUserList = () => {
    const { searchResult, searchError } = this.props
    if (searchResult && searchResult.length && !searchError) {
      return searchResult.map((user, index) => (
        <div className='search-result-item' key={index}>
          <UserCard avatarUrl={user.avatar_url} loginName={user.login} />
        </div>
      ))
    }
  }

  render() {
    const { isLoadingSearch, searchTotalCount } = this.props

    if (isLoadingSearch && this.state.page === 1) {
      return <DotLoader color='#000' fullPage radius={10} />
    }

    return (
      <div className='search-result-container'>
        <div className='pt30 pb30 c-accent'>
          <h1>{`Search Result: ${searchTotalCount} users found`}</h1>
        </div>

        <div className='search-result-list'>
          {this.renderUserList()}
          <div className='search-result-item' />
          <div className='search-result-item' />
          <div className='search-result-item' />
        </div>

        {this.shouldRenderLoadMoreButton() && (
          <div className='tc mt34 mb34'>
            <Button
              className='btn-default'
              isSubmitting={isLoadingSearch}
              onClick={this.handleLoadMore}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    )
  }
}

SearchResultPage.propTypes = {
  isLoadingSearch: bool.isRequired,
  location: object.isRequired,
  searchError: object,
  searchGithubUser: func.isRequired,
  searchResult: array,
  searchTotalCount: number,
}

export default SearchResultPage
