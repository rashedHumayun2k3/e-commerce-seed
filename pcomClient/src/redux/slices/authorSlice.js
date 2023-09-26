const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  selectedAuthorIdList: [],
};

export const authorSlice = createSlice({
    initialState,
    name: 'authorSlice',
    reducers: {
      pushCheckedAuthorName: (state, action) => {
        state.selectedAuthorIdList = action.payload;
      },
    },
  });
  
  export default authorSlice.reducer;
  export const getAllAuthorCheckList = state => state.authorReducer.selectedAuthorIdList;

  export const { pushCheckedAuthorName  } = authorSlice.actions;