import { useState } from "react";
import { UserProfile } from "../types/UserProfile";
import axios from "axios";
import { User } from "../types/api/User";

// Custom hook that get ALL Users
export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClickFetchUser = () => {
    setIsLoading(true);
    setIsError(false);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiles(data);
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  return { onClickFetchUser, userProfiles, isLoading, isError };
};
