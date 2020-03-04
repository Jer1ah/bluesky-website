import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

import Header from './Header';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';

import '../css/main.css';

const store = createStore(reducers, composeWithDevTools());

const App = () => {
    return (
        <Provider store={store}>
            <div className='app'>
                <Header />
                <CurrentWeather />
                <HourlyForecast />
                <WeeklyForecast />
            </div>
        </Provider>
    );
};

export default App;