import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  post: null,
};

export const postSlice = createSlice({
  initialState,
  name: 'postSlice',
  reducers: {
    postState: (state, action) => {
      state.post = action.payload;
    },
  },
});

export default postSlice.reducer;

export const { postState } = postSlice.actions;