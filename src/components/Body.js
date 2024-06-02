import { useState } from "react";
import AddBtn from "./AddBtn";
import TodoItem from "./TodoItem";
import todoData from "../mocks/TodoData.json";
import SearchBar from "./SearchBar";
import TodoItem from "./TodoItem";

const Body = () => {
  //   const [todoData, setTodoData] = useState([]);
  return (
    <>
      <SearchBar />
      <div className="border-2 h-[85vh] flex flex-col justify-center items-center">
        {todoData.length === 0 && (
          <>
            <h2 className="font-bold text-xl">You don't have any tasks yet</h2>
            <h2 className="font-bold text-xl">
              Click on the + button to add one
            </h2>
          </>
        )}
        {todoData.map((item) => (
          <TodoItem
            title={item.title}
            description={item.description}
            key={item.id}
            dueDate={item.dueDate}
          />
        ))}
        <AddBtn />
      </div>
    </>
  );
};

export default Body;
