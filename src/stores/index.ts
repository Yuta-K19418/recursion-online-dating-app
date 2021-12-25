import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ChatReducer from "../reducers/chat";
import UsersReducer from "../reducers/users";

const rootReducer = combineReducers({
  users: UsersReducer,
  messages: ChatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const Store = createStore(rootReducer, applyMiddleware(thunk));
