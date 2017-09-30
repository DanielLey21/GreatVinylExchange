import { Actions } from 'react-native-router-flux'; 
import { SET_EMAIL } from './types';

export const setEmail = (email) => {
    return ({
        type: SET_EMAIL,
        payload: email
    });
};