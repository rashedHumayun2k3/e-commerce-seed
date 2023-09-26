const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  productAttributeCheckList: [],
};

export const productAttributeSlice = createSlice({
    initialState,
    name: 'productAttributeSlice',
    reducers: {
      pushCheckedProductAttributeName: (state, action) => {
        state.productAttributeCheckList = action.payload;
      },
    },
  });
  
  export default productAttributeSlice.reducer;
  export const getProductAttributeCheckList = state => state.productAttribute.productAttributeCheckList;
  export const { pushCheckedProductAttributeName  } = productAttributeSlice.actions;