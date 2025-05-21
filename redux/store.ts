import { configureStore } from "@reduxjs/toolkit";
import locationReducer from './slices/locationSlice';
import loginReducer from "./slices/loginSlice";
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    location: locationReducer,
    login: loginReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;