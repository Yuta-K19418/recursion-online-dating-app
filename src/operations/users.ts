import { Dispatch } from "react";
import { RetrieveUsersDataAction } from "../actions/users";
import { RootState } from "../stores";
import { UsersType } from "../types";
import { Users } from "../types/users";

const RetrieveUsersData = () => {
  return async (dispatch: Dispatch<UsersType["action"]>, getState: () => RootState) => {
    const usersData: Users = await fetch("https://randomuser.me/api/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response: Response) => {
      return response.json();
    });
    dispatch(RetrieveUsersDataAction(usersData));
  };
};

export default RetrieveUsersData;
