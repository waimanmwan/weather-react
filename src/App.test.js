import React from 'react';
import './App.css';
import Search  from './Search';
import CurrentTemp from './CurrentTemp';
import Forecast from './Forecast';
import Cities from './Cities';
import BuiltBy from './BuiltBy';

export default function App(){
  return(
    <div className="background">
    <Search />
    <br/>
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
    </div>
  );}