import React from 'react'
import "./Search.css"
const Search = ({location,  onChangeLocation, searchLocation}) => {
  return (
    
        <div className="input">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={onChangeLocation}
          onKeyPress={searchLocation}
        />
      </div>
    
  )
}

export default Search
