import React from "react";
import Current from './Current';
import BuiltBy from './BuiltBy';
import './App.css';



export default function App(){
  return(
<div className="App">
  <div className="container">
    <Current defaultCity="london"/>
    <hr/>
    <br/>
    <BuiltBy/>
    <br/>
    </div>
    </div>);}