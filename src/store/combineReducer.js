import { combineReducers } from "redux";
import counterReducer from "../reducer/counterReducer";
import userReducer from "../reducer/userReducer";

const appReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
