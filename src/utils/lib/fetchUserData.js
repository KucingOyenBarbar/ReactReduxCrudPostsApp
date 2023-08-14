import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../config/api";

export const fetchAllUsers = createAsyncThunk(
  "posts/fetchAllUsers",
  async () => {
    const endpoint = "users";
    const response = await axios.get(`${API}/${endpoint}`);

    return response.data;
  }
);
