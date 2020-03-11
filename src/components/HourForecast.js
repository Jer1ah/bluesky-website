import React from 'react';

const hourForecast = ({ hour, temperature, weatherIcon }) => {
    return (
        <li className='hourlyForecastListItem'>
            <h3>{hour}</h3>
            <img src={weatherIcon} alt='Weather Icon'/>
            <h5>{temperature}&deg;</h5>
        </li>
    );
};

export default hourForecast;