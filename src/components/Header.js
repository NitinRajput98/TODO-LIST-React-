import ThemeToggleBtn from "./ThemeToggleBtn";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <h2 className="font-bold text-2xl">👋 Good Evening</h2>
        <h2 className="font-medium text-xl">date time</h2>
      </div>
      <h1 className="font-bold text-3xl">TODO LIST</h1>
      <div className="">
        <ThemeToggleBtn />
      </div>
    </nav>
  );
};

export default Header;
