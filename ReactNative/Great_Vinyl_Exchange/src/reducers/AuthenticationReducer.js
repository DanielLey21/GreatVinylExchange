import { SET_EMAIL,
         SET_USERNAME, 
         SET_PASSWORD, 
         SET_ADDRESS,
         REGISTER_USER,
         REGISTER_USER_SUCCESS,
         REGISTER_USER_FAIL,
         ADD_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = { email: '',
                        username: '',
                        address: '', 
                        password: '', 
                        user: null,
                        userProfile: null,
                        isLoading: false,
                        error: '',
                        firebaseError: null,
                        isResponseSuccess: null,
                     };

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
        case REGISTER_USER:
            return { ...state, isLoading: true, error: '' }; 
        case REGISTER_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case REGISTER_USER_FAIL: 
            return { ...state, isLoading: false, firebaseError: action.payload, isResponseSuccess: false };
        case ADD_USER_SUCCESS:
            console.log('Passing through reducer');
            return { ...state, isLoading: false, userProfile: action.payload, isResponseSuccess: true };
        default:
            return state;
    }
};