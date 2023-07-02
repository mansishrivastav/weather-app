import React from 'react'
import './LocationCoordinates.css'
const LocationCoordinates = ({data}) => {
  return (
    <>
      <section className="mid">
          <div>
            {data.coord && (
              <div>
                <h2>Longitude <p className='bold'>{data.coord.lon}</p></h2>
                <h2>Latitude <p>{data.coord.lat}</p></h2>                
              </div>
            )}
          </div>
        </section>
    </>
  )
}

export default LocationCoordinates
