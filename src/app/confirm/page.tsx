"use client";

import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function ConfirmForm() {
  const formData = useSelector((state: RootState) => state.formData);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="text-3xl font-bold">Form Data</h2>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Personal Info</h2>
        {JSON.stringify(formData.personalInfo)}
        <h2 className="text-2xl font-bold">Product Info</h2>
        {JSON.stringify(formData.productInfo)}
        <h2 className="text-2xl font-bold">Service Info</h2>
        {JSON.stringify(formData.serviceInfo)}
      </div>

      <Button className="my-8">
        <a href="https://github.com/Iftekhar-Ifat/multistep-form">Github</a>
      </Button>
    </main>
  );
}
