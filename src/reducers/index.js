import { combineReducers } from 'redux';

const dateReducer = (state='Monday 12 April', action) => {
    switch(action.type) {
        case 'GET_DATE':
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    currentDate: dateReducer
});