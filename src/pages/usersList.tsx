import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../components/profile";
import RetrieveUsersData from "../operations/users";
import { RootState } from "../stores";
import { Result } from "../types/users";

interface Props {
  gender: string;
}

const UsersList = (props: Props) => {
  const usersData = useSelector((state: RootState) => state.users["users"]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (usersData.results.length < 1) {
      dispatch(RetrieveUsersData(props.gender));
    }
  }, [dispatch, usersData.results.length, props.gender]);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {usersData.results.length > 0 &&
        usersData.results.map((user: Result) => <Profile key={user.login.uuid} userData={user} />)}
    </div>
  );
};
export default UsersList;
