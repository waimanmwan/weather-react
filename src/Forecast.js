import './Forecast.css';
import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast() {
    return(<div className="forecast">
    <p>
        <div className="container">
                <div className="col">Monday
                    <div className="row">
                        <div className="col">
                        <ReactAnimatedWeather
                            icon="SNOW"
                            color="#27496d"
                            size={30}
                            animate={true}
                        />
                        <div className="row">
                            <div className="col"> 13°C
                        </div>
                        </div>
                        </div>
                     </div>
                    </div>
                <div className="col">Tuesday
                    <div className="row">
                        <div className="col">
                        <ReactAnimatedWeather
                            icon="RAIN"
                            color="#27496d"
                            size={30}
                            animate={true}
                        />
                            <div className="row">
                                <div className="col"> 20°C
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                <div className="col">Wednesday
                    <div className="row">
                        <div className="col">
                        <ReactAnimatedWeather
                            icon="CLOUDY"
                            color="#27496d"
                            size={30}
                            animate={true}
                        />
                            <div className="row">
                                <div className="col"> 15°C
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                <div className="col">Thursday
                    <div className="row">
                        <div className="col">
                        <ReactAnimatedWeather
                            icon="CLEAR_DAY"
                            color="#27496d"
                            size={30}
                            animate={true}
                        />
                            <div className="row">
                                <div className="col"> 13°C
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                <div className="col">Friday
                    <div className="row">
                        <div className="col">
                        <ReactAnimatedWeather
                            icon="SNOW"
                            color="#27496d"
                            size={30}
                            animate={true}
                        />
                            <div className="row">
                                <div className="col"> 11°C
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

            </div>

    </p>
    </div>)
}


