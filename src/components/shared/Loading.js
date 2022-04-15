import React from 'react'
import Spinner from '../assets/Spinner.svg'

function Loading() {
    const loadingStyle = [{
        width: "100px",
        margin:"auto",
        display: "block"
    }]
  return (
    <img src={Spinner} alt='Loading...' style={loadingStyle[0]}/>
  )
}

export default Loading