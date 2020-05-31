import React from 'react'
import { connect } from 'react-redux'
import SearchResultPage from './SearchResultPage'
import { Actions } from '../../actions/searchAction'

const SearchResultPageContainer = (props) => <SearchResultPage {...props} />

const mapStateToProps = (state) => ({
  searchResult: state.search.searchResult,
  searchError: state.search.error,
  searchTotalCount: state.search.totalCount,
  isLoadingSearch: state.search.isLoadingSearch,
})

const mapDispatchToProps = {
  searchGithubUser: Actions.SEND_SEARCH_REQUEST,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultPageContainer)
