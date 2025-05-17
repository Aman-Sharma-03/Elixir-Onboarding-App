import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LocationState = {
  latitude: string | number | null;
  longitude: string | number | null;
};

const initialState: LocationState = {
  latitude: null,
  longitude: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<LocationState>) {
      return { ...state, ...action.payload };
    },
    resetLocation() {
      return initialState
    }
  }
})

export const {setLocation, resetLocation} = locationSlice.actions
export default locationSlice.reducer