import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import AppNavigator from '../navigation/AppNavigator';

//import getStore from '../store/store';

export default function AppRoot() {
    return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <AppNavigator />
        </Provider>
    );
}
