import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemInteface } from "../../Interface/index.ts";

type InitialState = {
  cart: Array<CartItemInteface | null>;
};

const initialState: InitialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Array<CartItemInteface | null>>) => {
      state.cart = action.payload;
    },
    addCart: (state, action: PayloadAction<CartItemInteface | null>) => {
      state.cart.push(action.payload);
    },
  },
});

export default CartSlice.reducer;
export const { setCart,addCart } = CartSlice.actions;
