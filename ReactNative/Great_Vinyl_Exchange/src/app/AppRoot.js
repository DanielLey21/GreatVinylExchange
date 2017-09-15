import React from 'react';
//import { Provider } from 'react-redux';
import { View } from 'react-native';

//import getStore from '../store/store';
import AuthenticationMain from '../containers/authentication/AuthenticationMain';

export default function AppRoot() {
    return (
        //<Provider store={getStore()}>
            <AuthenticationMain />
        //</Provider>
    );
}
