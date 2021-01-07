import React from "react";
import Current from './Current';
import Cities from './Cities';
import BuiltBy from './BuiltBy';
import './App.css';



export default function App(){
  return(
<div className="App">
  <div className="container">
    <Current defaultCity="london"/>

    <hr/>
    <br/>
    <Cities/>
    <br/>
    <BuiltBy/>
    <br/>
    </div>
    </div>);}