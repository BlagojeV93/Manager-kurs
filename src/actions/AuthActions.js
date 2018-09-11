import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASS_CHANGED, LOGIN_USER_SUCCES, LOGIN_USER_FAIL, LOGIN_USER } from '../components/types'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passChanged = (text) => {
    return {
        type: PASS_CHANGED,
        payload: text
    }
}

export const LoginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSucces(dispatch, user))
            .catch((error) => {
                console.log(error + ' GRIJESKA');

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSucces(dispatch, user))
                    .catch(() => loginUserFail(dispatch))
            })
    }
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })
}

const loginUserSucces = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCES,
        payload: user
    });
    Actions.main();
}