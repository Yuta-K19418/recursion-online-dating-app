import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RetrieveUsersData from "../operations/users";
import { RootState } from "../stores";

const UsersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RetrieveUsersData());
  });
  const usersData = useSelector((state: RootState) => state.users["users"]);
  console.log(usersData);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></div>
  );
};
export default UsersList;
