import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE_SAVE} from '../components/types'

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value } // name: action.payload.value
        case EMPLOYEE_CREATE_SAVE:
            return INITIAL_STATE
        default:
            return state;
    }
}