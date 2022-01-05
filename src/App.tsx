import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";
import { TodoType } from "./types/Todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";

const user = {
  name: "rito"
  //hobbys: ["movie", "piano"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <Text color="pink" fontSize="18px" />
      <UserProfile user={user} />
      <button onClick={onClickFetchData}>FETCH</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
