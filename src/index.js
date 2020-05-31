import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRoutes from './AppRoutes'
import store from './store'
import './assets/styles/index.less'

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
)
