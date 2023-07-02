import React, { useState } from "react";
import "./WeatherDetails.css";
import Search from "./Search";
import WeatherSummary from "./WeatherSummary";
import LocationCoordinates from "./LocationCoordinates";
import EnvironmentalConditions from "./EnvironmentalConditions";

const WeatherDetails = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(" ");
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      console.log(process.env)
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_API_ID}`

      )
        .then((response) => response.json())
        .then((jsonData) => {
          setData(jsonData);
          console.log("Fetched data", jsonData);
          setLocation("");
        })
        .catch((error) => console.log("Error fetching data:", error));
    }
  };

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  return (
    <div className="weather">
      <Search
        searchLocation={searchLocation}
        location={location}
        onChangeLocation={onChangeLocation}
      />
      <div className="container">
        <WeatherSummary data={data} />
        <LocationCoordinates data={data} />
        <EnvironmentalConditions data={data} />
      </div>
    </div>
  );
};

export default WeatherDetails;
