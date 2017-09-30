import { SET_EMAIL, SET_USERNAME } from '../actions/types';

const INITIAL_STATE = { email: '', username: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return { ...state, email: action.payload };
        case SET_USERNAME:
            return { ...state, username: action.payload };
        default:
            return state;
    }
};