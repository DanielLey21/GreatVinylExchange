import React from 'react';
import { StackNavigator } from 'react-navigation';

import AuthenticationMain from '../containers/authentication/AuthenticationMain';
import AuthenticationSignUpEmail from '../containers/authentication/AuthenticationSignUpEmail';
import AuthenticationSignUpUsername from '../containers/authentication/AuthenticationSignUpUsername';
import AuthenticationSignUpPassword from '../containers/authentication/AuthenticationSignUpPassword';

export default StackNavigator({
    AuthenticationMain: { screen: AuthenticationMain, navigationOptions: { header: null } },
    AuthenticationSignUpEmail: { screen: AuthenticationSignUpEmail, navigationOptions: { header: null } },
    AuthenticationSignUpUsername: { screen: AuthenticationSignUpUsername, navigationOptions: { header: null } },
    AuthenticationSignUpPassword: { screen: AuthenticationSignUpPassword, navigationOptions: { header: null } }
});

