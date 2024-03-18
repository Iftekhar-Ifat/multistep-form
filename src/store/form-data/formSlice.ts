import {
  TPersonalInfoFormSchema,
  TServiceInfoFormSchema,
} from "@/validation/form-validation";
import { createSlice } from "@reduxjs/toolkit";

type ProductInfoType = {
  timeline: string;
  products: string[];
};

const initialState = {
  personalInfo: {} as TPersonalInfoFormSchema,
  productInfo: {} as ProductInfoType,
  serviceInfo: {} as TServiceInfoFormSchema,
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    updateProductInfo: (state, action) => {
      state.productInfo = action.payload;
    },
    updateServiceInfo: (state, action) => {
      state.serviceInfo = action.payload;
    },
    getFormInfo: (state) => state,
  },
});

export const {
  updatePersonalInfo,
  updateProductInfo,
  updateServiceInfo,
  getFormInfo,
} = formDataSlice.actions;
export default formDataSlice.reducer;
