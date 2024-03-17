"use client";

import { RootState } from "@/store/store";
import PersonalInfoForm from "./Steps/PersonalInfoForm";
import ProductInfoForm from "./Steps/ProductInfoForm";
import ServiceInfoForm from "./Steps/ServiceInfoForm";
import { useSelector } from "react-redux";

export default function MultiStepForm() {
  const currentForm = useSelector(
    (state: RootState) => state.currentForm.value
  );

  return (
    <div>
      {currentForm === 1 ? (
        <PersonalInfoForm />
      ) : currentForm === 2 ? (
        <ProductInfoForm />
      ) : currentForm === 3 ? (
        <ServiceInfoForm />
      ) : null}
    </div>
  );
}
