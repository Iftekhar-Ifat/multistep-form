"use client";

import MultiStepForm from "@/components/MultiStepForm/MultiStepForm";
import { decrement, increment } from "@/store/slice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
      {/* <MultiStepForm /> */}
    </main>
  );
}
