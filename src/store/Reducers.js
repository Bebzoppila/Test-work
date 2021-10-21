import { combineReducers } from 'redux'

const default_user_state = { userName: '', isAuth: false }

function user(state = default_user_state, action) {
    switch (action.type) {
        case "AUTHORIZATION":
            return { userName: action.userName, isAuth: true }
        default:
            return state
    }
}

export default combineReducers({
    user,
})