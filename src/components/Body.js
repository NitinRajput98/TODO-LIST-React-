import { useState } from "react";
import AddBtn from "./AddBtn";
import TodoItem from "./TodoItem";
// import todoData from "../mocks/TodoData.json";
import SearchBar from "./SearchBar";
import TodoItem from "./TodoItem";
import CreateTodoForm from "./CreateTodoForm";

const Body = () => {
  const [todoData, setTodoData] = useState([]);
  const [open, setIsOpen] = useState(false);
  console.log(todoData, "todoData");
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
            createdAt={item.createdAt}
          />
        ))}
        <AddBtn open={open} setIsOpen={setIsOpen} todoData={todoData} />
        {open && (
          <CreateTodoForm
            showModal={open}
            setShowModal={setIsOpen}
            setTodoData={setTodoData}
            todoData={todoData}
          />
        )}
      </div>
    </>
  );
};

export default Body;
