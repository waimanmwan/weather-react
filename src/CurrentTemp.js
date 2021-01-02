import React from "react";
import CurrentDate from "./CurrentDate"
import CurrentIcon from "./CurrentIcon"


export default function CurrentTemp(props){
  return (<div>
    <h1> {props.data.city} </h1>
        <h2><CurrentDate date={props.data.date}/> </h2>
        <span className="CurrentWeatherIcon">
        <h4>    <CurrentIcon code={props.data.icon}
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
