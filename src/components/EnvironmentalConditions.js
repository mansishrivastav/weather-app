import React from 'react'
import './EnvironmentalConditions.css'

const EnvironmentalConditions = ({data}) => {
  return (
    <>
      <section className="bottom">
          <div className="feels">
            {data.main?<p className="bold">{data.main.feels_like.toFixed()}°F</p>:null}
            <p>Feels-like</p>
          </div>
          <div className="humidity">
            {data.main?<p className="bold">{data.main.humidity}%</p>:null}
            <p>Humidity</p>
          </div>
          <div className="wind-speed">
           {data.wind?<p className="bold">{data.wind.speed.toFixed()}MPH</p>:null}
            <p>Wind-speed</p>
          </div>
        </section>
    </>
  )
}

export default EnvironmentalConditions
