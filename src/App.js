import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="w-[80%] mx-auto p-4 flex flex-col justify-center gap-4">
      <Header />
      <Body />
    </div>
  );
};

export default App;
