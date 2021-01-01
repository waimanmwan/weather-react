import React from "react";
import CurrentDate from "./CurrentDate"
import ReactAnimatedWeather from 'react-animated-weather';

export default function CurrentTemp(props){
  return (<div>
    <h1> {props.data.city} </h1>
        <h2><CurrentDate date={props.data.date}/> </h2>
        <span className="CurrentWeatherIcon">
        <h4>      <ReactAnimatedWeather
          icon={props.data.icon}
          color="goldenrod"
          size={60}
          animate={true}
        /></h4>
        </span>
        <h5>
          <strong> {Math.round(props.data.temperature)}</strong>
          <span>°C </span>| <span> °F </span>
        </h5>
        <h6>
          {" "}
          Wind: {Math.round(props.data.wind)}mph | Humidity: {props.data.humidity}%
        </h6>
    </div>
    );
  }
