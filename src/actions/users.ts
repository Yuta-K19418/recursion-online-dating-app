import ACTION_TYPE from ".";
import { UsersType } from "../types";
import { Users } from "../types/users";

export const RetrieveUsersDataAction = (usersData: Users): UsersType["action"] => {
  return {
    type: ACTION_TYPE.RETRIEVE_USERS_DATA,
    payload: {
      users: usersData,
    },
  };
};
