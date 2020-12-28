import React from "react";
import './CurrentTemp.css';
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';

export default function CurrentTemp() {
  let cityLocation = {
    location: "London" };
    let nowTime = {
      time: "12:30",
      date: "Friday 25 Dec 2020"}
      let temp = {
        temperature: 7
      };
      let humidWind = {
        humidity: 20,
        wind: 10}
    

  return (
    <div >
      <h1> {cityLocation.location} </h1>
      <h2> {nowTime.time} </h2>
      <h3> {nowTime.date} </h3>
      <span className="CurrentWeatherIcon">
      <h4>      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size={60}
        animate={true}
      /></h4>
      </span>
      <h5>
        <strong> {temp.temperature}</strong>
        <span>°C </span>| <span> °F </span>
      </h5>
      <h6>
        {" "}
        Wind:{humidWind.wind}mph | Humidity: {humidWind.humidity}%
      </h6>
    </div>
  );

}