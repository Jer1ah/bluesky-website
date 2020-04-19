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
            moment().add(1, 'hour').format('ha'), 
            moment().add(2, 'hour').format('ha'), 
            moment().add(3, 'hour').format('ha'),
            moment().add(4, 'hour').format('ha')
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

export const getCurrentWeather = (key) => {
    return async (dispatch) => {
        const data = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=yjhc9euukkwR393enGgBNNlSaIA1i0T4&details=true`);
        dispatch({ type: 'GET_CURRENT_WEATHER', payload: data.data[0] });
    };
};

export const getLocationInfo = (zipcode) => {
    return async (dispatch) => {
        const data = await axios.get(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=yjhc9euukkwR393enGgBNNlSaIA1i0T4&q=${zipcode}`);
        dispatch({ type: "GET_LOCATION", payload: data.data[0] });
    };
};

export const updateLocationKey = (key) => {
    return {
        type: "GET_KEY",
        payload: key
    }
};

export const getHourlyForecast = (key) => {
    return async (dispatch) => {
        const data = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=yjhc9euukkwR393enGgBNNlSaIA1i0T4`);
        dispatch({ type: 'GET_HOURLY', payload: data.data });
    };
};

export const getWeeklyWeather = (key) => {
    return async (dispatch) => {
        const data = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=yjhc9euukkwR393enGgBNNlSaIA1i0T4&details=true`);
        dispatch({ type: "GET_WEEKLY_FORECAST", payload: data.data });
    }
};

export const updateZipcode = (userInput) => {
    return {
        type: 'GET_INPUT',
        payload: userInput
    };
};

