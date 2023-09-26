const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  selectedCategoryCode: null,
  selectedCategoryIdList: [],
  navigationCategoryList: [],
};

export const categorySlice = createSlice({
    initialState,
    name: 'categorySlice',
    reducers: {
      pushSelectedCategoryCode: (state, action) => {
        state.selectedCategoryCode = action.payload;
      },
      pushSelectedCategoryList: (state, action) => {
        state.selectedCategoryIdList = action.payload;
      },
    },
  });
  
  export default categorySlice.reducer;
  export const getSelectedCategory = state =>state.categoryReducer.selectedCategoryIdList;
  export const getSelectedCategoryCode = state => state.categoryReducer.selectedCategoryCode;
  export const { pushSelectedCategoryList, pushSelectedCategoryCode } = categorySlice.actions;