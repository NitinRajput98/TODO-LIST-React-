import TodoItemDropdown from "./TodoItemDopdown";

const TodoCard = ({
  title,
  description,
  dueDate,
  createdAt,
  id,
  todoData,
  setTodoData,
  completed,
  openEditForm,
  setOpenEditForm,
  setEditFormID,
  updatedAt,
  filteredData,
  setFilteredData,
  setSnackbarText,
  setshowDeleteSnackbar,
  setShowSuccessSnackbar,
}) => {
  const handleDelete = () => {
    const result = todoData.filter((item) => item.id != id);
    const resultFiltered = filteredData.filter((item) => item.id != id);
    setTodoData(result);
    setFilteredData(resultFiltered);
    //Show Snackbar
    setSnackbarText("Task deleted Successfully!");
    setshowDeleteSnackbar(true);
  };

  const handleEdit = () => {
    setEditFormID(id);
    setOpenEditForm(!openEditForm);
  };
  return (
    <div className="w-[40%] block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="border-b-2 text-left border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 flex justify-between">
        <h2
          className={
            completed
              ? `line-through text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50`
              : `text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50`
          }
        >
          {title}
        </h2>
        <h2>{createdAt}</h2>
        <div className="flex gap-2">
          <TodoItemDropdown
            id={id}
            todoData={todoData}
            setTodoData={setTodoData}
            setSnackbarText={setSnackbarText}
            setshowDeleteSnackbar={setshowDeleteSnackbar}
            setShowSuccessSnackbar={setShowSuccessSnackbar}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
      <div className="p-6 text-left">
        <p
          className={
            completed
              ? "line-through mb-4 text-base text-neutral-600 dark:text-neutral-200"
              : "mb-4 text-base text-neutral-600 dark:text-neutral-200"
          }
        >
          {description}
        </p>
      </div>
      <div className="flex gap-10 border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        <h2 className={completed ? "line-through" : ""}>⏱️ Due: {dueDate}</h2>
        {updatedAt && (
          <h2 className={completed ? "line-through" : ""}>
            📝 Updated At: {updatedAt}
          </h2>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
