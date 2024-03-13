import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/lib/_store/features/user/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      userSlice: userSlice,
    },
  });
};
