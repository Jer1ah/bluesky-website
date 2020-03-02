import React from 'react';

import weatherIcon from '../img/weather.svg';
import '../css/hourlyForecast.css';

const HourlyForecast = () => {
    return (
        <div className='hourlyForecast'>
            <h1>Hourly Forecast</h1>
            <ul className='hourlyForecastList'>
                <li className='hourlyForecastListItem'>
                    <h3>9am</h3>
                    <img src={weatherIcon} alt='Weather Icon'/>
                    <h5>23&deg;</h5>
                </li>
                <li className='hourlyForecastListItem'>
                    <h3>10am</h3>
                    <img src={weatherIcon} alt='Weather Icon'/>
                    <h5>25&deg;</h5>
                </li>
                <li className='hourlyForecastListItem'>
                    <h3>11am</h3>
                    <img src={weatherIcon} alt='Weather Icon'/>
                    <h5>27&deg;</h5>
                </li>
                <li className='hourlyForecastListItem'>
                    <h3>12pm</h3>
                    <img src={weatherIcon} alt='Weather Icon'/>
                    <h5>28&deg;</h5>
                </li>
                <li className='hourlyForecastListItem'>
                    <h3>1pm</h3>
                    <img src={weatherIcon} alt='Weather Icon'/>
                    <h5>31&deg;</h5>
                </li>
                <li className='hourlyForecastListItem'>
                    <h3>2pm</h3>
                    <img src={weatherIcon} alt='Weather Icon'/>
                    <h5>33&deg;</h5>
                </li>
            </ul>
        </div>
    );
};

export default HourlyForecast;