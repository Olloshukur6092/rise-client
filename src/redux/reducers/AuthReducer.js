import { AUTH_USER, GET_USER, LOG_OUT } from "../constants/authConstant";

const initialState = {
  user: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")) : null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        user: null,
      }
    default:
      return state;
  }
};

export default authReducer;
