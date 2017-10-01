import { SET_EMAIL, SET_USERNAME, SET_PASSWORD } from './types';

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

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        payload: password
    };
};