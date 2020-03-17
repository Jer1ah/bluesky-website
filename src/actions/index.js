import moment from 'moment';
import axios from 'axios';

export const getCurrentDate = () => {
    return {
        type: 'GET_DATE',
        payload: moment().format('dddd D MMMM')
    }
}

export const getCurrentHours = () => {
    return {
        type: 'GET_HOURS',
        payload: [ 
            moment().format('ha'),
            moment().add(3, 'hour').format('ha'), 
            moment().add(6, 'hour').format('ha'), 
            moment().add(9, 'hour').format('ha'),
            moment().add(12, 'hour').format('ha'),
            moment().add(15, 'hour').format('ha')
        ]
    };
};

export const getWeeklyForecast = () => {
    return {
        type: 'GET_DAYS',
        payload: [ 
            moment().add(1, 'days').format('dddd'), 
            moment().add(2, 'days').format('dddd'),
            moment().add(3, 'days').format('dddd'),
            moment().add(4, 'days').format('dddd'),
            moment().add(5, 'days').format('dddd')
        ]
    }
};

export const getCurrentWeather = () => {
    return async (dispatch) => {
        const data = await axios.get('http://api.openweathermap.org/data/2.5/weather?zip=28124&appid=207ac0eddd67fa374f18b49fb01aa66f&units=imperial');
        dispatch({ type: 'GET_CURRENT_WEATHER', payload: data.data });
    };
};

export const getCustomCurrentWeather = (zipcode) => {
    return async (dispatch) => {
        const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=207ac0eddd67fa374f18b49fb01aa66f&units=imperial`);
        dispatch({ type: 'GET_CURRENT_WEATHER', payload: data.data });
    };
};

export const getHourlyForecast = () => {
    return async (dispatch) => {
        const data = await axios.get('http://api.openweathermap.org/data/2.5/forecast?zip=28124&appid=207ac0eddd67fa374f18b49fb01aa66f&units=imperial');
        dispatch({ type: 'GET_HOURLY', payload: data.data.list });
    };
};

export const getCustomHourlyForecast = (zipcode) => {
    return async (dispatch) => {
        const data = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=207ac0eddd67fa374f18b49fb01aa66f&units=imperial`);
        dispatch({ type: 'GET_HOURLY', payload: data.data.list });
    };
};

export const updateZipcode = (userInput) => {
    return {
        type: 'GET_INPUT',
        payload: userInput
    };
};

