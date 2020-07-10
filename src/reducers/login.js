import AuthService from '../api/auth'

const LOGIN_IN_PROGRESS = 'LOGIN_IN_PROGRESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILED = 'LOGIN_FAILED'
const LOGOUT = 'LOGOUT'



const initialState = {
    isLoggingIn: false,
    isLoggedIn: false,
    accessToken: '',
    message: '',
}


export const login = (email, password) => (dispatch) => {
    dispatch({
        type: LOGIN_IN_PROGRESS,
        call: AuthService.login(email, password).then(res => {
            if(res.data.success)
                dispatch(loginSuccess(res.data))
            else
                dispatch(loginFailed(res.data))
        })
    })
}

export const logout = () => (dispatch) => {
    dispatch({type: LOGOUT})
}
  
const loginSuccess = (data) => (dispatch) => {
    dispatch({type: LOGIN_SUCCESS, payload: data})
}
  
const loginFailed = (data) => (dispatch) => {
    dispatch({type: LOGIN_FAILED, payload: data})
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_IN_PROGRESS:
            return {
                isLoggingIn: true,
            }
        case LOGIN_SUCCESS:
            return {
                isLoggedIn: true,
                isLoggingIn: false,
                accessToken: action.payload.token,
            }
        case LOGOUT:
            return {
                ...initialState,
            }
        default:
            return state;
    }

}
