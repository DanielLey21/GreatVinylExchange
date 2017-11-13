import React from 'react';
import { StackNavigator } from 'react-navigation';

import AuthenticationMain from '../containers/authentication/AuthenticationMain';
import AuthenticationSignUpEmail from '../containers/authentication/AuthenticationSignUpEmail';
import AuthenticationSignUpUsername from '../containers/authentication/AuthenticationSignUpUsername';
import AuthenticationSignUpAddress from '../containers/authentication/AuthenticationSignUpAddress';
import AuthenticationSignUpPassword from '../containers/authentication/AuthenticationSignUpPassword';
import AuthenticationSignUpConfirmPassword from '../containers/authentication/AuthenticationSignUpConfirmPassword';

export default StackNavigator({
    AuthenticationMain: { screen: AuthenticationMain, navigationOptions: { header: null } },
    AuthenticationSignUpEmail: { screen: AuthenticationSignUpEmail, navigationOptions: { header: null } },
    AuthenticationSignUpUsername: { screen: AuthenticationSignUpUsername, navigationOptions: { header: null } },
    AuthenticationSignUpAddress: { screen: AuthenticationSignUpAddress, navigationOptions: { header: null } },
    AuthenticationSignUpPassword: { screen: AuthenticationSignUpPassword, navigationOptions: { header: null } },
    AuthenticationSignUpConfirmPassword: { screen: AuthenticationSignUpConfirmPassword, navigationOptions: { header: null } }
});

