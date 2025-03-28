import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import { USERLIST_API } from "../constants";

function UsersList() {
  const [usersList, setUsersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getUserList = async () => {
      try {
        const response = await fetch(`${USERLIST_API}?page=${currentPage}`);
        const data = await response.json();
        setUsersList(data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUserList();
  }, [currentPage]);

  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-evenly gap-3 p-2 pt-20">
        {usersList.map((user) => (
          <UserCard
            key={user.id}
            avatar={user.avatar}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
          />
        ))}
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
    </>
  );
}

export default UsersList;
