import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import AppNavigator from '../navigation/AppNavigator';

//import getStore from '../store/store';

class AppRoot extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyC-W-GZCTt3P5VqxpPslhBIMoBKCQ6dUDc",
            authDomain: "great-vinyl-exchange.firebaseapp.com",
            databaseURL: "https://great-vinyl-exchange.firebaseio.com",
            projectId: "great-vinyl-exchange",
            storageBucket: "great-vinyl-exchange.appspot.com",
            messagingSenderId: "858136258074"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <AppNavigator />
            </Provider>
        );
    }
}

export default AppRoot;
