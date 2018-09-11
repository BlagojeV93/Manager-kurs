import { EMAIL_CHANGED, PASS_CHANGED, LOGIN_USER_SUCCES, LOGIN_USER_FAIL, LOGIN_USER } from '../components/types'
const INITIAL_STATE = {
    email: '', //email je sam po sebi dovoljan zbog pocetne inicijalizacije, ostalo je neobavezno
    password: '',
    user: null,
    error: '',
    loading: ''
} 

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASS_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_USER:
            return { ...state, loading: true, error: '' }
        case LOGIN_USER_SUCCES:
            return { ...state, ...INITIAL_STATE, user: action.payload }
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Ne valja', password: '', loading: false }
        default: return state;
    }
}