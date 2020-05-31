import React from 'react'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import { Actions } from '../../actions/searchAction'

const HomePageContainer = (props) => <HomePage {...props} />

const mapDispatchToProps = {
  searchGithubUser: Actions.SEND_SEARCH_REQUEST,
}

export default connect(null, mapDispatchToProps)(HomePageContainer)
