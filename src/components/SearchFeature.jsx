import React, { useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";

function SearchFeature({
  AllUsers,
  setSearchResults,
  searchTerm,
  setSearchTerm,
}) {
  // Searching across all usersData
  useEffect(() => {
    if (!searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredUsers = AllUsers.filter((user) => {
        return user.email.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredUsers);
    }
  }, [searchTerm, AllUsers, setSearchResults]);

  return (
    <div className="mx-auto flex w-2/5 items-center justify-center gap-1">
      <input
        type="text"
        placeholder="Search"
        className="w-3/4 min-w-[300px] rounded-md border border-gray-300 px-2 py-1 text-black outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="flex items-center gap-2 rounded-md bg-fuchsia-400 px-2 py-2 text-white hover:bg-fuchsia-500">
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default SearchFeature;
