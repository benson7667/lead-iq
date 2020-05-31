import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import SearchResultPage from './pages/search_result/SearchResultPage'

import * as Routes from './constants/routes'

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} exact path={Routes.HOME_ROUTE} />
        <Route
          component={SearchResultPage}
          exact
          path={Routes.SEARCH_RESULT_ROUTE}
        />
      </Switch>
    </Router>
  )
}

export default AppRoutes
