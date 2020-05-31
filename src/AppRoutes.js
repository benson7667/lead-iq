import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import SearchResultPage from './pages/search_result/SearchResultPage'
import UserProfilePage from './pages/user_profile/UserProfilePage'

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} exact path='/' />
        <Route component={SearchResultPage} exact path='/search-result' />
        <Route component={UserProfilePage} exact path='/user-profile/:id' />
      </Switch>
    </Router>
  )
}

export default AppRoutes
