import React from 'react'
import { bool, number, string } from 'prop-types'
import './styles.less'

const DotLoader = (props) => {
  const { color, radius, fullPage } = props
  return (
    <div className={`dot-loader ${fullPage ? 'full-page' : ''}`}>
      {[1, 2, 3].map((dot) => (
        <span
          key={dot}
          style={{
            width: radius,
            height: radius,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  )
}

DotLoader.defaultProps = {
  radius: 6,
  color: '#fff',
  fullPage: false,
}
DotLoader.propTypes = {
  color: string,
  fullPage: bool,
  radius: number,
}

export default DotLoader
