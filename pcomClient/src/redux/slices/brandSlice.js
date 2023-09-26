const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  selectedBrandIdList: [],
};

export const brandSlice = createSlice({
    initialState,
    name: 'brandSlice',
    reducers: {
      pushCheckedBrandName: (state, action) => {
        state.selectedBrandIdList = action.payload;
      },
    },
  });
  
  export default brandSlice.reducer;
  export const getSelectedBrandIdList = state =>state.brandReducer.selectedBrandIdList;
  export const { pushCheckedBrandName } = brandSlice.actions;