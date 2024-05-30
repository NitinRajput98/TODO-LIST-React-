import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
// import todoData from "../mocks/TodoData.json";

const TodoContainer = ({ todoData }) => {
  const [updatedTodo, setUpdatedTodo] = useState([]);

  useEffect(() => {
    setUpdatedTodo(todoData);
    console.log("Re Render");
  }, [todoData]);
  return (
    <div className="border-2 border-black">
      {updatedTodo.length > 0 &&
        updatedTodo.map((item) => {
          return <TodoItem todoData={item} key={item.id} />;
        })}
    </div>
  );
};

export default TodoContainer;
