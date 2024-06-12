import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/lib/_store/features/user/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      userSlice: userSlice,
    },
  });
};

// types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
