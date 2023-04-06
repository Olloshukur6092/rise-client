import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import newsReducer from "./NewsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
});

export default rootReducer;
