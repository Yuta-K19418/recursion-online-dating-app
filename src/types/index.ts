import ACTION_TYPE from "../actions";
import { Users } from "./users";

export type UsersType = {
  state: UsersStateType;
  action: UsersActionType;
};

type UsersStateType = {
  users: Users;
};

type UsersActionType = {
  type: keyof typeof ACTION_TYPE;
  payload: {
    users: Users;
  };
};
