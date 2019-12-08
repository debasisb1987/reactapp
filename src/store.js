import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './rootReducers';

const createAppStore = () => {
    const initialState = {};
    const store = createStore(rootReducers, {});

    return {
        store
    }
}
export const { store } = createAppStore();
