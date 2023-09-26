const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  checkedColorList: [],
};

export const colorSlice = createSlice({
    initialState,
    name: 'colorSlice',
    reducers: {
      pushCheckListForColorName: (state, action) => {
        state.checkedColorList = action.payload;
      },
    },
  });
  
  export default colorSlice.reducer;
  export const getAllCheckedColorList = state => state.colorReducer.checkedColorList;

  export const { pushCheckListForColorName  } = colorSlice.actions;