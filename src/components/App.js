import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

import Header from './Header';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';

import '../css/main.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

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