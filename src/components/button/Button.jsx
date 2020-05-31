import React, { Component } from 'react'
import { any, bool, func, string, object } from 'prop-types'
import { DotLoader } from '../../components'
import './styles.less'

class Button extends Component {
  handleClick = (e) => {
    const { onClick } = this.props
    onClick(e)
  }

  render() {
    const { children, className, disabled, isSubmitting, style } = this.props
    return (
      <button
        className={className}
        disabled={disabled || isSubmitting}
        onClick={this.handleClick}
        style={style}
        type='button'
      >
        {isSubmitting ? <DotLoader /> : children}
      </button>
    )
  }
}

Button.defaultProps = {
  children: 'button',
  disabled: false,
  isSubmitting: false,
}

Button.propTypes = {
  children: any,
  className: string,
  disabled: bool,
  isSubmitting: bool,
  onClick: func.isRequired,
  style: object,
}

export default Button
