import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../features/user/model/userSlice";
import cartReducer from "../../features/cart/model/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
