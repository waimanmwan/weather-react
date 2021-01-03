import React, {useState} from "react";

export default function Coversion(props){
    const [unit,setUnit]= useState("celsius");
    function convertFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit (){
        return(props.celsius *9/5) +32;
    }
    
    if (unit ==="celsius"){
    return(
    <div>
    <strong> {Math.round(props.celsius)}</strong>
          <span>°C {""}| <a href="/" onClick={convertFahrenheit}>°F </a></span>
          </div>
          );}
    else {
        
        return(
            <div>
            <strong> {Math.round(fahrenheit())}</strong>
                  <span><a href="/" onClick={convertCelsius}>°C </a> | {""}°F </span>
                  </div>
                  );}
    }