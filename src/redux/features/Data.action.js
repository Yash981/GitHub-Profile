import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGitHubUser = createAsyncThunk(
  "github/fetchUser",
  async (username, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();
      const reposResponse = await fetch(userData.repos_url);
      if (!reposResponse.ok) {
        throw new Error("Failed to fetch user repositories");
      }
      const reposData = await reposResponse.json();
      return {user: userData, repos: reposData};
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
