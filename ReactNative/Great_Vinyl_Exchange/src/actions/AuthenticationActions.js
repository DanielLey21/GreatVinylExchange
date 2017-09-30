import { SET_EMAIL, SET_USERNAME } from './types';

export const setEmail = (email) => {
    return {
        type: SET_EMAIL,
        payload: email
    };
};

export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        payload: username
    };
};