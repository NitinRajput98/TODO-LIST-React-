import TodoContainer from "./TodoContainer";
import { useRef, useState } from "react";

const MainContainer = () => {
  const [todoData, setTodoData] = useState([]);
  console.log("Main Container Render");
  console.log("todoData", todoData);
  const inputRef = useRef();
  const generateUniqueId = () => {
    return "id-" + Date.now() + "-" + Math.floor(Math.random() * 10000);
  };
  const addTodo = () => {
    // If input is empty show a snackbar on the screen
    if (inputRef.current.value === "") return;
    console.log(inputRef.current.value);
    const id = generateUniqueId(); // Example output: id-1628774102990-4811
    const description = inputRef.current.value;
    const todo = {
      id,
      description,
      title: "Client Follow-up",
      dueDate: "2024-06-04",
      priority: "low",
      completed: "false",
    };
    console.log("Data Added", todo);
    const currentData = todoData;
    console.log("currentData", currentData);
    currentData.push(todo);
    setTodoData(currentData);
  };
  return (
    <div className="flex flex-col justify-center items-center border-2 border-black gap-5">
      <h1 className="text-4xl font-extrabold text-slate-600">TODO LIST</h1>
      <div className="flex justify-between gap-4">
        <input
          ref={inputRef}
          className="border-2 border-black w-96 rounded-lg"
          type="text"
        />
        <button
          className="border border-black rounded-md w-28 font-bold text-lg"
          onClick={addTodo}
        >
          Add Task
        </button>
      </div>
      <TodoContainer todoData={todoData} />
    </div>
  );
};

export default MainContainer;
