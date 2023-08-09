import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInteface } from "../../Interface/index.ts";

type InitialState = {
  cart: Array<ProductInteface | null>;
};

const initialState: InitialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Array<ProductInteface | null>>) => {
      state.cart = action.payload;
    },
    addCart: (state, action: PayloadAction<ProductInteface>) => {
      state.cart.push(action.payload);
    },
  },
});

export default CartSlice.reducer;
export const { setCart,addCart } = CartSlice.actions;
