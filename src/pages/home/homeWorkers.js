import { call, put } from "redux-saga/effects";
import * as actions from './homeAction'


const fetchData = (username) => {
    const url = 'https://api.github.com/users/' + username;
    return fetch(url)
        .then(response => {
            if (response.status > 399) {
                console.log(response.status);
                throw Error(response.statusText);
            }
            return response.json();
        }).catch(err => {
            console.error('fetch failed', err);
            throw new Error(err)
        });
}

export function* fetchDataWorker(payload) {
    try {
        const result = yield call(fetchData, payload.name);
         yield put({
            result: result,
            error: null,
            type: actions.GET_USER_SUCCESS
        })
    } catch (error) {
        yield put({
            result: null,
            error: error,
            type: actions.GET_USER_ERROR
        })
    }
}