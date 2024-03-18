import { configureStore } from "@reduxjs/toolkit";
import formNavigationSlice from "./form-navigation/formNavigationSlice";
import formDataSlice from "./form-data/formSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      currentForm: formNavigationSlice,
      formData: formDataSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
