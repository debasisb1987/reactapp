import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './rootReducers';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';


const createAppStore = () => {
    const initialState = {};
    
    const reduxSaga = createSagaMiddleware();
    const store = createStore(rootReducers, {}, compose(applyMiddleware(reduxSaga)));
    reduxSaga.run(rootSaga);

    return {
        store
    }
}
export const { store } = createAppStore();
