import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  phone: string;
  name: string;
  email: string;
};

const initialState: UserState = {
  name: '',
  phone: '',
  email: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPhone(state, action: PayloadAction<string>){
      state.phone = action.payload
    },
    setName(state, action: PayloadAction<string>){
      state.name = action.payload
    },
    setEmail(state, action: PayloadAction<string>){
      state.email = action.payload
    },
    resetUser(state, action: PayloadAction<string>){
      return initialState;
    }
  }
})

export const {setPhone, setEmail, setName, resetUser} = userSlice.actions;
export default userSlice.reducer