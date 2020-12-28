import React from "react";
import CurrentTemp from './CurrentTemp';
import Forecast from './Forecast';
import Cities from './Cities';
import BuiltBy from './BuiltBy';
import './App.css';
import './Search.css';


export default function App(){
  return(
<div className="background">
    <CurrentTemp/>
    <hr/>
    <br/>
    <Forecast/>
    <hr/>
    <br/>
    <Cities/>
    <br/>
    <BuiltBy/>
    <br/>
    </div>);}