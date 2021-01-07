import React from "react";
import CurrentIcon from "./CurrentIcon";

export default function HourlyForecast (props){
function hours(){
    let date= new Date(props.data.dt*1000);
    let hours = date.getHours();
    return `${hours}:00`;
}


function temperature (){
let temperature = Math.round(props.data.main.temp)

return `${temperature}°C`;
}

    return(
<div className="HourlyForecast col">
 {hours()}
 <CurrentIcon code= {props.data.weather[0].icon}/>
 {temperature()}
 </div>
    )}