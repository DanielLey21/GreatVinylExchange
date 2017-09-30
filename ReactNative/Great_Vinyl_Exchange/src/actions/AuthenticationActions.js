import { SET_EMAIL } from './types';

export const setEmail = (email) => {
    return ({
        type: SET_EMAIL,
        payload: email
    });
};