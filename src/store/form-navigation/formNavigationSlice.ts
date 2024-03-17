import { createSlice } from "@reduxjs/toolkit";

export const formNavigationSlice = createSlice({
  name: "currentForm",
  initialState: {
    value: 1,
  },
  reducers: {
    nextStep: (state) => {
      state.value += 1;
    },
    previousStep: (state) => {
      state.value -= 1;
    },
  },
});

export const { nextStep, previousStep } = formNavigationSlice.actions;
export default formNavigationSlice.reducer;
