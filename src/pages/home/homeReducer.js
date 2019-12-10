import { combineReducers } from "redux";

const user = (state = {result: null, error: null, fetching: false }, action) => {
    switch (action.type) {
        
        case 'GET_USER':
            return {result : null, error: null, fetching: true };
        case 'GET_USER_SUCCESS':
            return {result : action.result, error: null, fetching: false };
        case 'GET_USER_ERROR':
            return {result : null, error: action.error, fetching: false };
        default:
            return state
    }
};

const home = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return state.concat([action.text])
        case 'GET_HOME':
            return state.concat([action.text])
        default:
            return state
    }
}

export default combineReducers({
    user,
    home
});

