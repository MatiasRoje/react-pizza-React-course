import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import { CartState } from "./types/order";
import { UserState } from "./types/user";
import { useDispatch } from "react-redux";

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

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
