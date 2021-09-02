import React from 'react'
import '../App.css'

const Search = (props) => {
  return (
    <div className="Search">
        <input
        value={props.inputValue}
        onChange={props.handleChange} type="text" 
        placeholder="🔎 Search"/>
        {/* <i className="fa fa-search"></i> */}
    </div>
    )
}

export default Search

// create a search bar component
// add an input
// create handleChange function */