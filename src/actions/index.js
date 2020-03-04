import moment from 'moment';

export const getCurrentDate = () => {
    return {
        type: 'GET_DATE',
        payload: moment().format('dddd D MMMM')
    }
}