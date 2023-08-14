import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

export default rootReducer;
