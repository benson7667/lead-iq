import React from 'react'
import { any, object, string } from 'prop-types'
import { Link as RouteLink, withRouter } from 'react-router-dom'
import './styles.less'

const Link = ({ to, className, children }) => (
  <RouteLink
    className={className}
    to={{
      pathname: to.pathname,
      search: to.search,
      state: { ...to.state },
    }}
  >
    {children}
  </RouteLink>
)
Link.propTypes = {
  children: any,
  className: string,
  to: object,
}

export default withRouter(Link)
