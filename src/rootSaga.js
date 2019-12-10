import { all } from 'redux-saga/effects'

import homeSaga from './pages/home/homeSaga';

export default function* rootSaga() {
    yield all(
        [...homeSaga].map(fn => fn())
    )
};
