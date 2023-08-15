import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../config/api";

export const fetchAllUsers = createAsyncThunk(
  "posts/fetchAllUsers",
  async () => {
    const endpoint = "users";
    const abortController = new AbortController();

    try {
      const response = await axios.get(`${API}/${endpoint}`, {
        method: "GET",
        signal: abortController.signal,
        validateStatus: function (status) {
          return status >= 200 && status < 400;
        },
      });

      return response.data;
    } catch (err) {
      if (err.response) {
        // The client was given an error response (5xx, 4xx)
        console.log(err.response);
      } else if (err.request) {
        // The client never received a response, and the request was never left
        console.log(err.request);
      } else {
        // Anything else
        console.log(err);
      }

      abortController.abort;
    }
  }
);
