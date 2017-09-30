import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import NavigationReducer from './NavigationReducer';

export default combineReducers({
    authentication: AuthenticationReducer,
    nav: NavigationReducer,
});