import { useEffect, useRef, useState } from "react";

const EditTodoForm = ({
  setShowModal,
  setTodoData,
  todoData,
  editFormID,
  filteredData,
  setFilteredData,
  setSnackbarText,
  setShowSuccessSnackbar,
}) => {
  const title = useRef(null);
  const description = useRef(null);
  const deadline = useRef(null);
  const priority = useRef(null);
  const [currentTaskData, setcurrentTaskData] = useState({});
  const formatDateTime = (datetimeValue) => {
    const date = new Date(datetimeValue);

    // Get hours and minutes
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour time to 12-hour time
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Format minutes to always be two digits
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    // Get the day, month, and year
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-indexed
    const year = date.getFullYear();

    // Format the final string
    return `${hours}:${formattedMinutes} ${ampm}, ${month}/${day}/${year}`;
  };

  const getCurrentDateTime = () => {
    const date = new Date();

    // Get hours and minutes
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour time to 12-hour time
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Format minutes to always be two digits
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    // Get the day, month, and year
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-indexed
    const year = date.getFullYear();

    // Format the final string
    return `${hours}:${formattedMinutes} ${ampm}, ${month}/${day}/${year}`;
  };

  const validateForm = () => {
    return (
      title.current.value.length &&
      description.current.value &&
      deadline.current.value &&
      (priority.current.value === "Critical" ||
        priority.current.value === "High" ||
        priority.current.value === "Medium" ||
        priority.current.value === "Low" ||
        priority.current.value === "None")
    );
  };
  const submitForm = () => {
    //Validating form input
    if (!validateForm()) return;
    const item = {
      id: editFormID,
      title: title.current.value,
      description: description.current.value,
      dueDate: formatDateTime(deadline.current.value),
      priority: priority.current.value,
      completed: currentTaskData.completed,
      createdAt: currentTaskData.createdAt,
      updatedAt: getCurrentDateTime(),
      dueDateDefaultFormat: deadline.current.value,
    };

    const currentData = [...todoData];
    currentData.splice(
      currentData.findIndex((item) => item.id === editFormID),
      1,
      item
    );
    const currentFilteredData = [...filteredData];
    currentFilteredData.splice(
      currentFilteredData.findIndex((item) => item.id === editFormID),
      1,
      item
    );
    //Update Data
    setTodoData(currentData);
    setFilteredData(currentFilteredData);

    //Close Form modal
    setShowModal(false);
    //Empty the fields
    title.current.value = "";
    description.current.value = "";
    deadline.current.value = "";
    priority.current.value = "";
    //Show Snackbar
    setSnackbarText("Task updated successfully!");
    setShowSuccessSnackbar(true);
  };

  const showEditFormData = () => {
    const [data] = todoData.filter((item) => item.id === editFormID);
    title.current.value = data.title;
    description.current.value = data.description;
    deadline.current.value = data.dueDateDefaultFormat;
    priority.current.value = data.priority;
    setcurrentTaskData(data);
  };
  useEffect(() => {
    showEditFormData();
  }, []);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[40vw]">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Task</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-9 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Task Title
                </label>
                <input
                  ref={title}
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter task title"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Task Description
                </label>
                <textarea
                  ref={description}
                  id="description"
                  className="bg-gray-50 border peer resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:resize-none"
                  placeholder="Enter task description"
                ></textarea>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="deadline"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Task Deadline
                </label>
                <input
                  ref={deadline}
                  type="datetime-local"
                  id="deadline"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="priority"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Task Priority
                </label>
                <select
                  ref={priority}
                  id="priority"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue>Choose task priority</option>
                  <option value="Critical">Critical</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                  <option value="None">None</option>
                </select>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={submitForm}
              >
                Update Task
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EditTodoForm;
