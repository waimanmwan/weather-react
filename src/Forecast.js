import React, {useState} from "react";
import HourlyForecast from "./HourlyForecast";
import axios from 'axios';
import './Forecast.css';


export default function Forecast(props) {
    const [loaded, setLoaded]= useState (false);
    const [forecast, setForecast]= useState (null);

    function showForecast (response){
        setForecast (response.data);
        setLoaded (true);

    }

    
    if (loaded && props.city === forecast.city.name){
        return (
        <div className="weatherForecast row">
           <HourlyForecast data={forecast.list[0]}/>
           <HourlyForecast data={forecast.list[1]}/>
           <HourlyForecast data={forecast.list[2]}/>
           <HourlyForecast data={forecast.list[3]}/>
           <HourlyForecast data={forecast.list[4]}/>

        </div>
        );
    }
    else {
  
        const apikey="c3d2257e9dc82191e8d794596274f050";
        let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apikey}&units=metric`;
        axios.get(apiUrl).then(showForecast);

    return null;
    }
}


