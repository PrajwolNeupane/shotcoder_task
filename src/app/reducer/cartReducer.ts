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
    removeCart: (state, action: PayloadAction<CartItemInteface | null>) => {
      var index: number = state.cart.findIndex(
        (curr: CartItemInteface | null) => {
          return curr?.id == action.payload?.id;
        }
      );
      if (index != -1) {
        if (state.cart[index]?.quantity != 1) {
          state.cart[index]!.quantity = state.cart[index]!.quantity - 1;
        } else {
          state.cart.splice(index, 1);
        }
      }
    },
  },
});

export default CartSlice.reducer;
export const { setCart, addCart,removeCart } = CartSlice.actions;
