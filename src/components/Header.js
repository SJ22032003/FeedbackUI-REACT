import PropTypes from 'prop-types';
import React from 'react'

function Header(props) {
    const headerStyle = {
        backgroundColor: props.bgColor,
        color : props.textColor
    }
  return (
    <header style={headerStyle}>
        <div className='container'>
            <h1>Feedback UI Project</h1>
        </div>
    </header>
  )
}
// Default Props
Header.defaultProps = {
    text: "Default Text",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
};
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header