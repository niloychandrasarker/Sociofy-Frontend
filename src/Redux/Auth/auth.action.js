import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./auth.actionType";
import axios from "axios";
import { API_BASE_URL } from "../../Config/api";

export const loginUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
        console.log("Login action success:", data);
    } catch (error) {
        console.error("Login action error:", error);
        dispatch({ type: LOGIN_FAILURE, payload: error.response?.data?.message || error.message });
    }
};



export const registerUserAction = (registerData) => async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }
        dispatch({ type: SIGNUP_SUCCESS, payload: data.jwt });
        console.log("Signup action success:", data);
    } catch (error) {
        console.error("signup action error:", error);
        dispatch({ type: SIGNUP_FAILURE, payload: error.response?.data?.message || error.message });
    }
};