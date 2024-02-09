import { createSlice } from '@reduxjs/toolkit';
import { fetchGitHubUser } from './Data.action';


const githubSlice = createSlice({
  name: 'github',
  initialState: {
    user: null,
    loading: false,
    error: null,
    repos: [],
    numReposToShow : 4,
    searchUser:"",
  },
  reducers: {
    setNumReposToShow(state, action) {
        state.numReposToShow = action.payload;
    },
    setSearchUser(state, action) {
        state.searchUser = action.payload;
  },
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubUser.pending, (state) => {
        state.loading = true;
        state.error = null;

      })
      .addCase(fetchGitHubUser.fulfilled, (state, action) => {
        state.loading = false;
        const {user,repos} = action.payload;
        state.user = user;
        state.repos = repos;
      })
      .addCase(fetchGitHubUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
export const { setNumReposToShow, setSearchUser } =  githubSlice.actions;
export default githubSlice.reducer;
