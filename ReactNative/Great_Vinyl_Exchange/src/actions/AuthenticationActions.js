import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

import { SET_EMAIL,
         SET_USERNAME,
         SET_PASSWORD, 
         SET_ADDRESS, 
         REGISTER_USER,
         REGISTER_USER_SUCCESS, 
         REGISTER_USER_FAIL,
         ADD_USER_SUCCESS,
} from './types';

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

export const setAddress = (address) => {
    return {
        type: SET_ADDRESS,
        payload: address
    };
};

export const registerUser = (user, password) => {
    return (dispatch) => {
        dispatch({type: REGISTER_USER });
        firebase.auth().createUserWithEmailAndPassword(user.email, password)
            .then(firebaseUser => registerUserSuccess(dispatch, user))
            .catch(function(error) {
                registerUserFail(dispatch, error);
            });
    };
}

const registerUserFail = (dispatch, error) => {
    dispatch({ 
        type: REGISTER_USER_FAIL,
        payload: error
     })
};

const registerUserSuccess = (dispatch, user) => {
    console.log(`sucess ${user} ${user.email}`)
    addUserToDatabase(dispatch, user);
    dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: user
    });
};

const addUserToDatabase = (dispatch, user) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/userProfile`)
        .push(user)
        .then(() => {
            dispatch({ type: ADD_USER_SUCCESS, payload: user });
            dispatch(NavigationActions.navigate({routeName: 'AuthenticationMain'}));
        })
        .catch(error => {
            registerUserFail(dispatch, error);
        });
};