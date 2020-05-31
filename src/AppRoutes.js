import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePageContainer from './pages/home/HomePageContainer'
import SearchResultPageContainer from './pages/search_result/SearchResultPageContainer'
import UserProfilePage from './pages/user_profile/UserProfilePage'

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route component={HomePageContainer} exact path='/' />
        <Route
          component={SearchResultPageContainer}
          exact
          path='/search-result'
        />
        <Route component={UserProfilePage} exact path='/user-profile/:id' />
      </Switch>
    </Router>
  )
}

export default AppRoutes
