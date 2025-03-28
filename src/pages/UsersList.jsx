import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import { USERSLIST_API } from "../constants";
import SearchFeature from "../components/SearchFeature";

function UsersList() {
  const [usersList, setUsersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [AllUsers, setAllUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const totalPages = 2;
  const [searchTerm, setSearchTerm] = useState("");

  // Fetching all usersData
  useEffect(() => {
    const fetchAllUsers = async () => {
      let combinedUsersData = [];
      for (let i = 1; i <= totalPages; i++) {
        const response = await fetch(`${USERSLIST_API}?page=${i}`);
        const data = await response.json();
        combinedUsersData = [...combinedUsersData, ...data.data];
      }
      setAllUsers(combinedUsersData);
    };
    fetchAllUsers();
  }, []);

  // pagination
  useEffect(() => {
    const getUserList = async () => {
      try {
        const response = await fetch(`${USERSLIST_API}?page=${currentPage}`);
        const data = await response.json();
        setUsersList(data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUserList();
  }, [currentPage]);

  return (
    <div className="pt-20">
      <SearchFeature
        AllUsers={AllUsers}
        setSearchResults={setSearchResults}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="flex w-full flex-wrap items-center justify-evenly gap-3 p-2 pt-10">
        {searchTerm ? (
          searchResults.length > 0 ? (
            searchResults.map((user) => (
              <UserCard
                key={user.id}
                avatar={user.avatar}
                first_name={user.first_name}
                last_name={user.last_name}
                email={user.email}
              />
            ))
          ) : (
            <p>No results found</p>
          )
        ) : (
          usersList.map((user) => (
            <UserCard
              key={user.id}
              avatar={user.avatar}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
            />
          ))
        )}
      </div>
      <div className="my-4 flex justify-center gap-2 text-white">
        <button
          className={`px-4 py-2 ${currentPage === 1 ? "bg-gray-500" : "bg-fuchsia-400"}`}
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          1
        </button>
        <button
          className={`px-4 py-2 ${currentPage === 2 ? "bg-gray-500" : "bg-fuchsia-400"}`}
          onClick={() => setCurrentPage(2)}
          disabled={currentPage === 2}
        >
          2
        </button>
      </div>
    </div>
  );
}

export default UsersList;
