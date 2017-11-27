import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import reducers from './ReducerIndex';

const initialState = {
    nav: null,
    error: null,
};

export default function getStore() {
    const store = createStore(
        reducers,
        applyMiddleware(thunk)
    );

    return store;
}