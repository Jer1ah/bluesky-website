import React from 'react';

import weatherIcon from '../img/weather.svg';
import '../css/weeklyForecast.css';

const WeeklyForecast = () => {
    return (
        <div className='weeklyForecast'>
            <h1>Next 5 Days</h1>
            <ul className='weeklyForecastList'>
                <li className='weeklyForecastListItem'>
                    <h5 className='day'>Tuesday</h5>
                    <img src={weatherIcon} alt='Weather Icon' />
                    <div className='lowTemp'>
                        <h4>12&deg;</h4>
                        <h5>Low</h5>
                    </div>
                    <div className='highTemp'>
                        <h4>27&deg;</h4>
                        <h5>High</h5>
                    </div>
                    <div className='wind'>
                        <h4>17mph</h4>
                        <h5>Wind</h5>
                    </div>
                    <div className='rain'>
                        <h4>12%</h4>
                        <h5>Rain</h5>
                    </div>
                </li>
                <li className='weeklyForecastListItem'>
                    <h5 className='day'>Wednesday</h5>
                    <img src={weatherIcon} alt='Weather Icon' />
                    <div className='lowTemp'>
                        <h4>12&deg;</h4>
                        <h5>Low</h5>
                    </div>
                    <div className='highTemp'>
                        <h4>27&deg;</h4>
                        <h5>High</h5>
                    </div>
                    <div className='wind'>
                        <h4>17mph</h4>
                        <h5>Wind</h5>
                    </div>
                    <div className='rain'>
                        <h4>12%</h4>
                        <h5>Rain</h5>
                    </div>
                </li>
                <li className='weeklyForecastListItem'>
                    <h5 className='day'>Thursday</h5>
                    <img src={weatherIcon} alt='Weather Icon' />
                    <div className='lowTemp'>
                        <h4>12&deg;</h4>
                        <h5>Low</h5>
                    </div>
                    <div className='highTemp'>
                        <h4>27&deg;</h4>
                        <h5>High</h5>
                    </div>
                    <div className='wind'>
                        <h4>17mph</h4>
                        <h5>Wind</h5>
                    </div>
                    <div className='rain'>
                        <h4>12%</h4>
                        <h5>Rain</h5>
                    </div>
                </li>
                <li className='weeklyForecastListItem'>
                    <h5 className='day'>Friday</h5>
                    <img src={weatherIcon} alt='Weather Icon' />
                    <div className='lowTemp'>
                        <h4>12&deg;</h4>
                        <h5>Low</h5>
                    </div>
                    <div className='highTemp'>
                        <h4>27&deg;</h4>
                        <h5>High</h5>
                    </div>
                    <div className='wind'>
                        <h4>17mph</h4>
                        <h5>Wind</h5>
                    </div>
                    <div className='rain'>
                        <h4>12%</h4>
                        <h5>Rain</h5>
                    </div>
                </li>
                <li className='weeklyForecastListItem'>
                    <h5 className='day'>Saturday</h5>
                    <img src={weatherIcon} alt='Weather Icon' />
                    <div className='lowTemp'>
                        <h4>12&deg;</h4>
                        <h5>Low</h5>
                    </div>
                    <div className='highTemp'>
                        <h4>27&deg;</h4>
                        <h5>High</h5>
                    </div>
                    <div className='wind'>
                        <h4>17mph</h4>
                        <h5>Wind</h5>
                    </div>
                    <div className='rain'>
                        <h4>12%</h4>
                        <h5>Rain</h5>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default WeeklyForecast;