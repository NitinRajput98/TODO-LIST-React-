import { useState } from "react";
import AddBtn from "./AddBtn";
import TodoItem from "./TodoItem";
// import todoData from "../mocks/TodoData.json";
import SearchBar from "./SearchBar";
import TodoItem from "./TodoItem";
import CreateTodoForm from "./CreateTodoForm";
import EditTodoForm from "./EditTodoForm";

const Body = () => {
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      title: "Finish Project Proposal",
      description:
        "Complete the project proposal for the new client by outlining the objectives, timeline, and budget.",
      dueDate: "2024-06-01",
      dueDateDefaultFormat: "2024-06-03T00:04",
      createdAt: "2024-06-04",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Team Meeting",
      description:
        "Conduct a team meeting to discuss the progress of the current projects and address any issues.",
      dueDate: "2024-06-02",
      dueDateDefaultFormat: "2024-06-03T00:04",
      createdAt: "2024-06-04",
      priority: "Medium",
      completed: false,
    },
    {
      id: 3,
      title: "Code Review",
      description:
        "Review the code submitted by the junior developers and provide feedback for improvements.",
      dueDate: "2024-06-03",
      dueDateDefaultFormat: "2024-06-03T00:04",
      createdAt: "2024-06-04",
      priority: "High",
      completed: false,
    },
    {
      id: 4,
      title: "Client Follow-up",
      description:
        "Follow up with the client regarding the project updates and address any queries they may have.",
      dueDate: "2024-06-04",
      dueDateDefaultFormat: "2024-06-03T00:04",
      createdAt: "2024-06-04",
      priority: "Low",
      completed: false,
    },
    {
      id: 5,
      title: "Update Documentation",
      description:
        "Update the project documentation with the latest changes and improvements made in the project.",
      dueDate: "2024-06-05",
      dueDateDefaultFormat: "2024-06-03T00:04",
      createdAt: "2024-06-04",
      priority: "Medium",
      completed: false,
    },
  ]);
  const [open, setIsOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [editFormID, setEditFormID] = useState("");
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
            id={item.id}
            todoData={todoData}
            setTodoData={setTodoData}
            completed={item.completed}
            openEditForm={openEditForm}
            setOpenEditForm={setOpenEditForm}
            setEditFormID={setEditFormID}
            updatedAt={item?.updatedAt}
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
        {openEditForm && (
          <EditTodoForm
            showModal={openEditForm}
            setShowModal={setOpenEditForm}
            setTodoData={setTodoData}
            todoData={todoData}
            editFormID={editFormID}
          />
        )}
      </div>
    </>
  );
};

export default Body;
