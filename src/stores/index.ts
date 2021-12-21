import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import UsersReducer from "../reducers/users";

const rootReducer = combineReducers({
  users: UsersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const Store = createStore(rootReducer, applyMiddleware(thunk));
