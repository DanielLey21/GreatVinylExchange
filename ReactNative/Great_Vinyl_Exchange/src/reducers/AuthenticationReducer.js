import { SET_EMAIL, SET_USERNAME, SET_PASSWORD, SET_ADDRESS } from '../actions/types';

const INITIAL_STATE = { email: '', username: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return { ...state, email: action.payload };
        case SET_USERNAME:
            return { ...state, username: action.payload };
        case SET_ADDRESS:
            return { ...state, address: action.payload };
        case SET_PASSWORD:
            return { ...state, password: action.payload };
        default:
            return state;
    }
};