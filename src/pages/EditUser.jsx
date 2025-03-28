import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../ReduxStore/usersSlice";

import { USERSLIST_API } from "../constants";
import { toast } from "react-toastify";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.usersList);
  const existingUser = usersList.find((user) => user.id === parseInt(id));

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  // Fetch user data if not in Redux store
  useEffect(() => {
    if (existingUser) {
      setFormData({
        first_name: existingUser.first_name,
        last_name: existingUser.last_name,
        email: existingUser.email,
      });
    } else {
      fetch(`${USERSLIST_API}/${id}`)
        .then((res) => res.json())
        .then((data) =>
          setFormData({
            first_name: data.data.first_name,
            last_name: data.data.last_name,
            email: data.data.email,
          }),
        )
        .catch((error) => console.error("Error fetching user:", error));
    }
  }, [id, existingUser]);

  // Handle Form Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${USERSLIST_API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        dispatch(updateUser({ id: parseInt(id), updatedData: formData }));
        toast.success("User updated successfully!");
        navigate("/home/usersList"); // Redirect to home
      })
      .catch((error) => console.error("Error updating user:", error));
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 rounded-lg bg-white p-5 shadow-lg">
        <h2 className="text-lg font-semibold">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="mt-2 w-full rounded border p-2"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <input
            className="mt-2 w-full rounded border p-2"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
          <input
            className="mt-2 w-full rounded border p-2"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="mt-3 flex justify-end">
            <button
              type="button"
              className="mr-2 rounded bg-gray-500 px-3 py-1 text-white"
              onClick={() => navigate("/home/usersList")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-green-500 px-3 py-1 text-white"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
