import React from "react";
import CurrentDate from "./CurrentDate";
import CurrentIcon from "./CurrentIcon";
import Conversion from "./Conversion";
import './Current.css';


export default function CurrentTemp(props){
  return (<div>
        <br/>
       <h1> <strong>{props.data.city} </strong></h1>
        <h2><CurrentDate date={props.data.date}/> </h2>
        <br/>
        <span className="CurrentWeatherIcon">
        <h4>    <CurrentIcon code={props.data.icon}
        /></h4>
        </span>
        <h5>
          <Conversion celsius={props.data.temperature}/>
        </h5>
        <br/>
        <h6>
          {" "}
         <strong> Wind: {Math.round(props.data.wind)}mph | Humidity: {props.data.humidity}%</strong>
        </h6>
    </div>
    );
  }
