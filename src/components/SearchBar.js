import React from "react";

const SearchBar = ({
  todoData,
  setFilteredData,
  searchTerm,
  setSearchTerm,
}) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const result = todoData.filter((item) =>
      `${item.title.toLowerCase()} ${item.description.toLowerCase()}`.includes(
        e.target.value.toLowerCase()
      )
    );
    setFilteredData(result);
  };

  const handleClear = () => {
    setSearchTerm("");
    setFilteredData(todoData);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search..."
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
