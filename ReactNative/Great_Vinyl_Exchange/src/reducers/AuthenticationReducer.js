import { SET_EMAIL } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return { ...state, email: action.payload };
        default:
            return state;
    }
};