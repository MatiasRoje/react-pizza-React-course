import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import { CartState } from "./types/order";
import { UserState } from "./types/user";

export type StoreState = {
  cart: CartState;
  user: UserState;
};

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
