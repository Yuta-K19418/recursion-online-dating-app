import { UsersType } from "../types";

export const initialUsersState: UsersType["state"] = {
  users: {
    results: [],
    info: {
      seed: "",
      results: 0,
      page: 0,
      version: "",
    },
  },
};
