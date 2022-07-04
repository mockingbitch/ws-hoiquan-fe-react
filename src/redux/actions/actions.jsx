import { USER_LOGIN_SUCCESS } from "../../store/Constants";

export const setUserLogin = payload => ({
    type: USER_LOGIN_SUCCESS,
    payload
})