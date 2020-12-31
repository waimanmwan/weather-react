import React, { useState } from "react";
import axios from 'axios';
import './CurrentTemp.css';
import './Search.css';
import CurrentDate from "./CurrentDate"
import ReactAnimatedWeather from 'react-animated-weather';

export default function CurrentTemp(){
  const [weather, setWeather]= useState({ready: false});
  function showTemperature(response){
    console.log(response.data)
    setWeather({
        ready: true,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        temperature: response.data.main.temp,
        wind: response.data.main.speed,
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    })

  }

  if (weather.ready){
    return (
      <div>
      <form className="search">
      <input className="searchBar" type="search" placeholder="Enter a City..." />
      <input className="searchButton" type="submit" value="SEARCH" />
      <input className="currentButton" type="submit" value="CURRENT" />
    </form>

    <h1> {weather.city} </h1>
        <h2><CurrentDate date={weather.date}/> </h2>
        <h3> </h3>
        <span className="CurrentWeatherIcon">
        <h4>      <ReactAnimatedWeather
          icon={weather.icon}
          color="goldenrod"
          size={60}
          animate={true}
        /></h4>
        </span>
        <h5>
          <strong> {Math.round(weather.temperature)}</strong>
          <span>°C </span>| <span> °F </span>
        </h5>
        <h6>
          {" "}
          Wind:{weather.wind}mph | Humidity: {weather.humidity}%
        </h6>
    </div>
    )
  }

  else{
    const apikey="c3d2257e9dc82191e8d794596274f050";
    let city ="London";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(showTemperature)
  
    return "Loading...";
  }


  
  
}