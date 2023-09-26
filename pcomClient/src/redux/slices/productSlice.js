import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  selectedProduct: null,
};

export const productSlice = createSlice({
  initialState,
  name: 'productSlice',
  reducers: {
    setSelectedProduct :(state, action)=>{
        state.selectedProduct= action.payload;
    },
    logout: () => initialState,
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default productSlice.reducer;
export const getSelectedProduct = state => state.productReducer.selectedProduct;
export const { logout, setUser, setSelectedProduct } = productSlice.actions;