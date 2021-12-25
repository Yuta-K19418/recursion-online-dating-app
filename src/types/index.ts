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

export type ChatType = {
  state: ChatStateType;
  action: ChatActionType;
};

type ChatStateType = {
  messages: Messages;
};

type Messages = {
  [index: userId]: Message[];
};

export type Message = {
  who: string;
  message: string;
  textedTime: string;
};

type userId = string;

type ChatActionType = {
  type: keyof typeof ACTION_TYPE;
  payload: {
    userId: userId;
    messages: Message[];
  };
};
