import { initialUsersState } from "../stores/initialState";
import { UsersType } from "../types";

const UsersReducer = (state = initialUsersState, action: UsersType["action"]): UsersType["state"] => {
  switch (action.type) {
    case "RETRIEVE_USERS_DATA":
      state.users = action.payload.users;
      return state;
    default:
      return state;
  }
};

export default UsersReducer;
