import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../config/api";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    const endpoint = "posts";
    const response = await axios.get(`${API}/${endpoint}`);

    return response.data;
  }
);

export const addNewPosts = createAsyncThunk("posts/", async (initialPost) => {
  const response = await axios.post(`${API}/posts`, initialPost);
  const responseData = await response.data;
  return responseData;
});
