import PersonalInfoForm from "@/components/MultiStepForm/PersonalInfoForm";
import ProductInfoForm from "@/components/MultiStepForm/ProductInfoForm";
import ServiceInfoForm from "@/components/MultiStepForm/ServiceInfoForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <PersonalInfoForm />
      {/* <ProductInfoForm /> */}
      {/* <ServiceInfoForm /> */}
    </main>
  );
}
