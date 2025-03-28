import React from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../ReduxStore/usersSlice";

import { USERSLIST_API } from "../constants";
import { toast } from "react-toastify";

const Btn = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center rounded-md bg-fuchsia-400 px-2 text-white hover:bg-fuchsia-500"
    >
      {icon} {label}
    </button>
  );
};

function UserCard({ avatar, first_name, last_name, email, userId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle Delete User
  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch(`${USERSLIST_API}/${userId}`, { method: "DELETE" })
        .then(() => dispatch(deleteUser(userId)))
        .then(toast.success("User Deletion successfully!"))
        .catch((error) => console.error("Error deleting user:", error));
    }
  };

  return (
    <div className="grid h-[300px] w-[225px] place-content-center rounded-md border-2">
      <img src={avatar} className="h-full w-full" />
      <div className="px-1">
        <p className="font-bold">{first_name + " " + last_name}</p>
        <p className="font-semibold">{email}</p>
      </div>
      <div className="flex items-center justify-around gap-2 p-1 text-base font-semibold">
        <Btn
          icon={<MdEdit />}
          label={"Edit"}
          onClick={() => navigate(`/home/editUser/${userId}`)}
        />
        <Btn
          icon={<RiDeleteBin6Line />}
          label={"Delete"}
          onClick={() => {
            handleDelete(userId);
          }}
        />
      </div>
    </div>
  );
}

export default UserCard;
