import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePageContainer from './pages/home/HomePageContainer'
import SearchResultPageContainer from './pages/search_result/SearchResultPageContainer'
import UserProfilePageContainer from './pages/user_profile/UserProfilePageContainer'
import ReadmePageContainer from './pages/readme/ReadmePageContainer'

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
        <Route
          component={UserProfilePageContainer}
          exact
          path='/user-profile/:userId'
        />
        <Route
          component={ReadmePageContainer}
          exact
          path='/user-profile/:userId/:repoId'
        />
      </Switch>
    </Router>
  )
}

export default AppRoutes
