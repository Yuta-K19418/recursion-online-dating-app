import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../components/profile";
import RetrieveUsersData from "../operations/users";
import { RootState } from "../stores";
import { Result } from "../types/users";

const UsersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RetrieveUsersData());
  }, [dispatch]);
  const usersData = useSelector((state: RootState) => state.users["users"]);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {usersData.results.length > 0 && usersData.results.map((user: Result) => <Profile userData={user} />)}
    </div>
  );
};
export default UsersList;
