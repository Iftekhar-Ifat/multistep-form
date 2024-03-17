"use client";

import React, { useState } from "react";
import PersonalInfoForm from "./Steps/PersonalInfoForm";
import ProductInfoForm from "./Steps/ProductInfoForm";
import ServiceInfoForm from "./Steps/ServiceInfoForm";
import { CurrentFormType, currentForm } from "@/types/form.types";

export default function MultiStepForm() {
  const [currentForm, setCurrentForm] = useState(1);
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
