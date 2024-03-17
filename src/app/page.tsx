"use client";

import MultiStepForm from "@/components/MultiStepForm/MultiStepForm";
import { decrement, increment } from "@/store/slice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <MultiStepForm />
    </main>
  );
}
