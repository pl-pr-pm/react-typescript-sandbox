import { VFC } from "react";
import { User } from "./types/User";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;

  return (
    <dl>
      <dt>NAME</dt>
      <dd>{user.name}</dd>
      <dt>FAVORITE</dt>
      <dd>{user.hobbys?.join("/")}</dd>
    </dl>
  );
};
