import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication/AuthenticationReducer';
import NavigationReducer from './navigation/NavigationReducer';

export default combineReducers({
    authentication: AuthenticationReducer,
    nav: NavigationReducer,
});