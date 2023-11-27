import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const darkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    toogle: (state, action) => {
      state.value = !state.value;
    },
  },
});
export const { toogle } = darkSlice.actions;
export default darkSlice.reducer;
