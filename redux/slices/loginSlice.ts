import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type loginState = {
  loginType: string | null;
};

const initialState: loginState = {
  loginType: null
};

const loginSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<string>) {
      state.loginType = action.payload
    },
  }
})

export const {setLogin} = loginSlice.actions
export default loginSlice.reducer