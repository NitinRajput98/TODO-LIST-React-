import { useState } from "react";
import AddBtn from "./AddBtn";
// import todoData from "../mocks/TodoData.json";
import SearchBar from "./SearchBar";
import TodoItem from "./TodoItem";
import CreateTodoForm from "./CreateTodoForm";
import EditTodoForm from "./EditTodoForm";
import NoResultFoundImg from "../../public/no-results-found.jpg";
import DeleteSnackbar from "./DeleteSnackbar";
import SuccessSnackbar from "./SuccessSnackbar";
import DeleteModal from "./DeleteModal";
import TodoCard from "./TodoCard";
import FilterDropdown from "./FilterDropdown";
import RadialProgress from "./RadialProgress";
// import TodoCard from "./TodoCard";

const Body = () => {
  // const [todoData, setTodoData] = useState([
  //   {
  //     id: 1,
  //     title: "Finish Project Proposal",
  //     description:
  //       "Complete the project proposal for the new client by outlining the objectives, timeline, and budget.",
  //     dueDate: "2024-06-01",
  //     dueDateDefaultFormat: "2024-06-03T00:04",
  //     createdAt: "2024-06-04",
  //     priority: "High",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Team Meeting",
  //     description:
  //       "Conduct a team meeting to discuss the progress of the current projects and address any issues.",
  //     dueDate: "2024-06-02",
  //     dueDateDefaultFormat: "2024-06-03T00:04",
  //     createdAt: "2024-06-04",
  //     priority: "Medium",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Code Review",
  //     description:
  //       "Review the code submitted by the junior developers and provide feedback for improvements.",
  //     dueDate: "2024-06-03",
  //     dueDateDefaultFormat: "2024-06-03T00:04",
  //     createdAt: "2024-06-04",
  //     priority: "High",
  //     completed: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Client Follow-up",
  //     description:
  //       "Follow up with the client regarding the project updates and address any queries they may have.",
  //     dueDate: "2024-06-04",
  //     dueDateDefaultFormat: "2024-06-03T00:04",
  //     createdAt: "2024-06-04",
  //     priority: "Low",
  //     completed: false,
  //   },
  //   {
  //     id: 5,
  //     title: "Update Documentation",
  //     description:
  //       "Update the project documentation with the latest changes and improvements made in the project.",
  //     dueDate: "2024-06-05",
  //     dueDateDefaultFormat: "2024-06-03T00:04",
  //     createdAt: "2024-06-04",
  //     priority: "Medium",
  //     completed: false,
  //   },
  // ]);
  const [todoData, setTodoData] = useState([]);
  const [filteredData, setFilteredData] = useState(todoData);
  const [open, setIsOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [editFormID, setEditFormID] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [snackBarText, setSnackbarText] = useState("");
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showDeleteSnackbar, setshowDeleteSnackbar] = useState(false);
  return (
    <>
      {todoData.length > 0 && (
        <div className="flex justify-center items-center border p-2">
          <RadialProgress todoData={todoData} />
        </div>
      )}
      <div className="flex justify-between mt-10">
        <SearchBar
          todoData={todoData}
          setFilteredData={setFilteredData}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <FilterDropdown />
      </div>
      <div
        className={
          todoData.length === 0 && (searchTerm === "" || searchTerm !== "")
            ? "min-h-[70vh] border-2 flex flex-col justify-center items-center gap-2 flex-wrap"
            : "border-2 flex flex-row justify-center items-center gap-7 flex-wrap"
        }
      >
        {todoData.length === 0 && searchTerm === "" && (
          <>
            <h2 className="font-bold text-xl">You don't have any tasks yet</h2>
            <h2 className="font-bold text-xl">
              Click on the + button to add one
            </h2>
          </>
        )}
        {filteredData.length === 0 && searchTerm !== "" && (
          <>
            <h2 className="font-bold text-xl">No tasks found</h2>
            <h2 className="font-bold text-xl">
              Try searching with different keywords.
            </h2>
            <img className="w-[15%] h-[30%]" src={NoResultFoundImg} />
          </>
        )}
        {filteredData.map((item) => (
          <TodoCard
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
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            setSnackbarText={setSnackbarText}
            setshowDeleteSnackbar={setshowDeleteSnackbar}
            setShowSuccessSnackbar={setShowSuccessSnackbar}
          />
        ))}
        <AddBtn open={open} setIsOpen={setIsOpen} todoData={todoData} />
        {open && (
          <CreateTodoForm
            setShowModal={setIsOpen}
            setTodoData={setTodoData}
            todoData={todoData}
            setFilteredData={setFilteredData}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setShowSuccessSnackbar={setShowSuccessSnackbar}
            setSnackbarText={setSnackbarText}
          />
        )}
        {openEditForm && (
          <EditTodoForm
            setShowModal={setOpenEditForm}
            setTodoData={setTodoData}
            todoData={todoData}
            editFormID={editFormID}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            setSnackbarText={setSnackbarText}
            setshowDeleteSnackbar={setshowDeleteSnackbar}
            setShowSuccessSnackbar={setShowSuccessSnackbar}
          />
        )}
        {showDeleteSnackbar && (
          <DeleteSnackbar
            snackBarText={snackBarText}
            setshowDeleteSnackbar={setshowDeleteSnackbar}
          />
        )}
        {showSuccessSnackbar && (
          <SuccessSnackbar
            snackBarText={snackBarText}
            setShowSuccessSnackbar={setShowSuccessSnackbar}
          />
        )}
      </div>
      {/* <DeleteModal /> */}
    </>
  );
};

export default Body;
