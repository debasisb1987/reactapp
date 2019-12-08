import { combineReducers } from "redux";

const user = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return state.concat([action.text])
        case 'GET_USER':
            return state;
        default:
            return state
    }
};

const home = (state = [], action) => {
    switch (action.type) {
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

