import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInteface } from "../../Interface/index.ts";

type InitialState = {
  products: Array<ProductInteface | null>;
};

const initialState: InitialState = {
  products: [],
};

const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setProducts: (
      state,
      action: PayloadAction<Array<ProductInteface | null>>
    ) => {
      state.products = action.payload;
    },
  },
});

export default ProductsSlice.reducer;
export const { setProducts } = ProductsSlice.actions;
