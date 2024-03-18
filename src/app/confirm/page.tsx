"use client";

import { getFormInfo } from "@/store/form-data/formSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function ConfirmForm() {
  const test = useSelector((state: RootState) => {
    state.formData.personalInfo,
      state.formData.productInfo,
      state.formData.serviceInfo;
  });

  console.log(test);
  return <div>page</div>;
}
