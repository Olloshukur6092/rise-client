import { GET_USER } from "../constants/authConstant";

const initialState = {
  count: 1,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
        return state;
  }
};

export default authReducer;