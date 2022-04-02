import React from 'react'
import PropTypes from 'prop-types'
function Button(props) {
  return (
    <button type={props.type} disabled={props.isDisabled} className={`btn btn-${props.version}`}>{props.children}</button>
  )
}
Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool.isRequired
}
export default Button