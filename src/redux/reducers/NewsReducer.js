import { ADD_NEWS, GET_NEWS } from "../constants/newsConstant";

const initialState = {
  news: [],
  success: "",
  errors: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case ADD_NEWS:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
