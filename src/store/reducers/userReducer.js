import { fetchAllUsers } from "../../utils/lib/fetchUserData";
import { createSlice } from "@reduxjs/toolkit";
import { initialUsersData } from "../../utils/data/initialUsersData";

const initialState = [];

const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default userReducer.reducer;
