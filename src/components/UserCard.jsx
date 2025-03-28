import React from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Btn = ({ icon, label }) => {
  return (
    <button className="flex items-center rounded-md bg-fuchsia-400 px-2 text-white hover:bg-fuchsia-500">
      {icon} {label}
    </button>
  );
};

function UserCard({ avatar, first_name, last_name, email }) {
  return (
    <div className="grid h-[300px] w-[225px] place-content-center rounded-md border-2">
      <img src={avatar} className="h-full w-full" />
      <div className="px-1">
        <p className="font-bold">{first_name + " " + last_name}</p>
        <p className="font-semibold">{email}</p>
      </div>
      <div className="flex items-center justify-around gap-2 p-1 text-base font-semibold">
        <Btn icon={<MdEdit />} label={"Edit"} />
        <Btn icon={<RiDeleteBin6Line />} label={"Delete"} />
      </div>
    </div>
  );
}

export default UserCard;
