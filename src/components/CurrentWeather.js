import React from 'react';

import weatherIcon from '../img/weather.svg';
import '../css/currentWeather.css';

const CurrentWeather = () => {
    return (
        <div className='currentWeather'>
            <div className='currentWeatherMain'>
                <img src={weatherIcon} alt='Weather Icon'/>
                <div className='currentTemp'>
                    <h1>36&deg;</h1>
                    <h5>Mostly Sunny</h5>
                </div> {/* .currentTemp end */}
            </div> {/* .currentMain end */}
            <div className='currentWeatherAside'>
                <ul className='conditionsList'>
                    <li className='conditionItem'>
                        <h3>47&deg;</h3>
                        <h5>High</h5>
                    </li>
                    <li className='conditionItem'>
                        <h3>7mph</h3>
                        <h5>Wind</h5>
                    </li>
                    <li className='conditionItem'>
                        <h3>5:27am</h3>
                        <h5>Sunrise</h5>
                    </li>
                    <li className='conditionItem'>
                        <h3>23&deg;</h3>
                        <h5>Low</h5>
                    </li>
                    <li className='conditionItem'>
                        <h3>12%</h3>
                        <h5>Rain</h5>
                    </li>
                    <li className='conditionItem'>
                        <h3>6:33pm</h3>
                        <h5>Sunset</h5>
                    </li>
                </ul>
            </div> {/* .currentAside end */}
        </div>
    );
};

export default CurrentWeather;