import React, { useState } from "react";
import axios from 'axios';
import './Current.css';
import './Search.css';
import CurrentTemp from "./CurrentTemp";
import Forecast from "./Forecast";

export default function Current(props){
  const [weather, setWeather]= useState({ready: false});
  const [city, setCity]= useState (props.defaultCity);
  function showTemperature(response){
    console.log(response.data)
    setWeather({
        ready: true,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: response.data.weather[0].icon,
    })

  }

  function search (){
    const apikey="c3d2257e9dc82191e8d794596274f050";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  
  }


  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleSearchCity(event){
    setCity(event.target.value);
    
  }


  if (weather.ready){
    return (
      <div>
      <form className="searching" onSubmit={handleSubmit}>
      <input className="searchBar" type="search" autoFocus="on" placeholder="Enter a City..." onChange={handleSearchCity} />
      <input className="searchButton" type="submit" value="SEARCH" />
      <input className="currentButton" type="submit" value="CURRENT" />
    </form>

  <CurrentTemp data={weather}/>
  <hr/>
  <br/>
  <Forecast city={weather.city}/>
  <br/>
    </div>
    );
  }

  else{
    search();
    return "Loading...";
  }


  
  
}