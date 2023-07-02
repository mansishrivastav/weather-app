import React from 'react'
import "./WeatherSummary.css"

const WeatherSummary = ({data}) => {
  return (
    <>
     <section className="top">
          <div className="location">
            <p className='bold'>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1 className='bold'>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <h1 className='bold'>{data.weather[0].main}</h1> : null}
          </div>
          </section> 
    </>
  )
}

export default WeatherSummary
