import React from 'react';

import Header from './Header';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';

import '../css/main.css';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <CurrentWeather />
            <HourlyForecast />
        </div>
    );
};

export default App;