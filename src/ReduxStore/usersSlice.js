import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { usersList: [] },
  reducers: {
    setUsers: (state, action) => {
      state.usersList = action.payload;
    },
    updateUser: (state, action) => {
      const { id, updatedData } = action.payload;
      state.usersList = state.usersList.map((user) =>
        user.id === id ? { ...user, ...updatedData } : user,
      );
    },
    deleteUser: (state, action) => {
      state.usersList = state.usersList.filter(
        (user) => user.id !== action.payload,
      );
    },
  },
});

export const { setUsers, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
