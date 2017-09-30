import Navigator from '../navigation/navigation';

const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('AuthenticationMain'));

export default (state = initialState, action) => {
    const newState = Navigator.router.getStateForAction(action, state);
    return newState || state;
};