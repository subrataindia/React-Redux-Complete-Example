import {createSlice} from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    fetchAllProducts: () => {},
    setProducts: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const {fetchAllProducts, setProducts} = productsSlice.actions;
export default productsSlice.reducer;
