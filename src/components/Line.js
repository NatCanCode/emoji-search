import React from 'react'
import '../App.css'

const Line = (props) => {
  return (
    <ul className="Line">
      <li title="click to copy" onClick={() => navigator.clipboard.writeText(props.symbol)}>
        <p>{props.title}</p>
        <p>{props.symbol}</p>
      </li>
    </ul>
  )
  
}

export default Line
