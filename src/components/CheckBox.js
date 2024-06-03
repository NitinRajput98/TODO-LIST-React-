import { useRef, useState } from "react";

const CheckBox = ({
  id,
  todoData,
  setTodoData,
  setSnackbarText,
  setshowDeleteSnackbar,
  setShowSuccessSnackbar,
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(!checked);
    const result = todoData.map((item) => {
      if (item.id === id) {
        item.completed = !checked;
      }
      return item;
    });
    setTodoData(result);
    //Show Snackbar
    if (!checked === false) {
      setSnackbarText("Task unmarked as complete!");
      setshowDeleteSnackbar(true);
    } else {
      setSnackbarText("Task marked as complete!");
      setShowSuccessSnackbar(true);
    }
  };

  return (
    <div className="flex items-center cursor-pointer">
      <input
        onChange={handleChange}
        checked={checked}
        id="checked-checkbox"
        type="checkbox"
        className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
    </div>
  );
};

export default CheckBox;
