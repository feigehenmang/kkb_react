import { sendUserInfo } from "../../service/user";
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "../const"

export default (userInfo) => {
    return (dispatch) => {
        dispatch({type: LOGIN_REQUEST});
        sendUserInfo(userInfo).then(
            result => {
                console.log(result);
                dispatch({type: LOGIN_SUCCESS, payload: result})
            },
            error => {
                console.log(error)
                dispatch({type: LOGIN_FAILED, payload: {error}})
            }
        )
    }
}