const AddBtn = ({ setIsOpen, open, todoData }) => {
  return (
    <button
      type="button"
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  top-[85%] right-[10%] fixed ${
        todoData.length === 0 ? `animate-bounce` : `animate-none`
      }`}
      onClick={() => {
        console.log("Hello", open);
        setIsOpen(!open);
      }}
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
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  );
};

export default AddBtn;
