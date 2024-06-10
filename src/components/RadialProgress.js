const RadialProgress = ({ todoData }) => {
  return (
    <div className="flex justify-center items-center gap-10">
      <div
        className="radial-progress"
        style={{
          "--value":
            (todoData.filter((item) => item.completed === true).length /
              todoData.length) *
            100,
        }}
        role="progressbar"
      >
        {`${
          (todoData.filter((item) => item.completed === true).length /
            todoData.length) *
          100
        } %`}
      </div>
      <div>
        <h2>
          You've completed{" "}
          {todoData.filter((item) => item.completed === true).length} out of{" "}
          {todoData.length} tasks.
        </h2>
        <h2>Congratulations! All tasks completed!</h2>
      </div>
    </div>
  );
};

export default RadialProgress;
