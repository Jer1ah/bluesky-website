import { combineReducers } from 'redux';

const dateReducer = (state='', action) => {
    switch(action.type) {
        case 'GET_DATE':
            return action.payload;
        default:
            return state;
    }
};

const hourReducer = (state=[], action) => {
    switch (action.type) {
        case 'GET_HOURS':
            return action.payload;
        default: 
            return state;
    }
};

const dayReducer = (state=[], action) => {
    switch (action.type) {
        case 'GET_DAYS':
            return action.payload;
        default: 
            return state;
    }
};

const currentWeatherReducer = (state={}, action) => {
    switch(action.type) {
        case 'GET_CURRENT_WEATHER':
            return action.payload;
        default:
            return state;
    }
}

const hourlyForecastReducer = (state=[], action) => {
    switch(action.type) {
        case 'GET_HOURLY':
            return action.payload;
        default:
            return state;
    }
};

const userInputReducer = (state='', action) => {
    switch(action.type) {
        case 'GET_INPUT':
            return action.payload   
        default:
            return state;
    };
};

export default combineReducers({
    currentDate: dateReducer,
    currentHours: hourReducer,
    days: dayReducer,
    currentWeather: currentWeatherReducer,
    hourlyForecast: hourlyForecastReducer,
    userInput: userInputReducer
});