import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Search  from './Search';
import CurrentTemp from './CurrentTemp';
import Forecast from './Forecast';
import Cities from './Cities';
import BuiltBy from './BuiltBy';

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
