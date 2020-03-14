import React from 'react';

const dailyForecast = (props) => {
    return (
        <li className='weeklyForecastListItem'>
            <h5 className='day'>{props.day}</h5>
            <img src={props.weatherIcon} alt='Weather Icon' />
            <div className='lowTemp'>
                <h4>{props.lowTemp}&deg;</h4>
                <h5>Low</h5>
            </div>
            <div className='highTemp'>
                <h4>{props.highTemp}&deg;</h4>
                <h5>High</h5>
            </div>
            <div className='wind'>
                <h4>{props.wind}mph</h4>
                <h5>Wind</h5>
            </div>
            <div className='rain'>
                <h4>{props.humidity}%</h4>
                <h5>Humidity</h5>
            </div>
        </li>
    );
};

export default dailyForecast;