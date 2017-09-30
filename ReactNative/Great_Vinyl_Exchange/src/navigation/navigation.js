import React from 'react';
import { StackNavigator } from 'react-navigation';

import AuthenticationMain from '../containers/authentication/AuthenticationMain';
import AuthenticationSignUpEmail from '../containers/authentication/AuthenticationSignUpEmail';

export default StackNavigator({
    AuthenticationMain: { screen: AuthenticationMain, navigationOptions: { header: null } },
    AuthenticationSignUpEmail: { screen: AuthenticationSignUpEmail, navigationOptions: { header: null } }
});

