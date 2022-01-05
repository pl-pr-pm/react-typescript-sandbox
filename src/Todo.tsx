import { VFC } from "react";
import { TodoType } from "./types/Todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[D]" : "[U]";
  return <p>{`${completedMark} ${title}(user:${userId})`}</p>;
};
