import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./auth.actionType";

const initialState={
    jwt: null,
    error: null,
    loading: false,
    user: null
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, error: null };
        case LOGIN_SUCCESS:
            return { ...state, jwt:action.payload, loading: false, user: action.payload ,error: null};
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case SIGNUP_REQUEST:
            return { ...state, loading: true, error: null };
        case SIGNUP_SUCCESS:
            return { ...state, jwt:action.payload, loading: false, user: action.payload ,error: null};
        case SIGNUP_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
