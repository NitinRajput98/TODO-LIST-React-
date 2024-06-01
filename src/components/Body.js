import { useState } from "react";
import AddBtn from "./AddBtn";

const Body = () => {
  const [todoData, setTodoData] = useState([]);
  return (
    <div className="border-2 h-[85vh] flex flex-col justify-center items-center">
      {todoData.length === 0 && (
        <>
          <h2 className="font-bold text-xl">You don't have any tasks yet</h2>
          <h2 className="font-bold text-xl">
            Click on the + button to add one
          </h2>
        </>
      )}
      <AddBtn />
    </div>
  );
};

export default Body;
