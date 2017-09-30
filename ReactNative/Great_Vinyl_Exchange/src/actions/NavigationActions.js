import { Actions } from 'react-native-router-flux'; 
import { AUTHENTICATION_SIGN_UP_BEGIN } from './types';

export const currentScene = (sceneName) => {
    return (dispatch) => {
        dispath({
            type: AUTHENTICATION_SIGN_UP_BEGIN,
            payload: sceneName
        });

        Actions.signUpEmail();
    };
};