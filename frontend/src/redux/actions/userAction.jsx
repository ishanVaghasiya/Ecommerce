import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constant/userConstant";
import axios from "axios";

const userLoginAction = (userData) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("http://localhost:5000/login", userData, {
      withCredentials: true,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }

  localStorage.setItem(
    "userInfo",
    JSON.stringify(getState().userLogin.userInfo)
  );
};

const userLogout = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5000/logout", {
        withCredentials: true
    });
    dispatch({
      type: USER_LOGOUT,
      payload: data,
    });
  } catch (error) {
    dispatch({ payload: error });
  }
};
export { userLoginAction, userLogout };
