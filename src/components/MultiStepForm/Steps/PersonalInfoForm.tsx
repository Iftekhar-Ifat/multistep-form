"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "@/store/form-navigation/formNavigationSlice";
import {
  PersonalInfoFormSchema,
  TPersonalInfoFormSchema,
} from "@/validation/form-validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { updatePersonalInfo } from "@/store/form-data/formSlice";
import { RootState } from "@/store/store";

export default function PersonalInfoForm() {
  const dispatch = useDispatch();
  const formData = useSelector(
    (state: RootState) => state.formData.personalInfo
  );

  const form = useForm<TPersonalInfoFormSchema>({
    resolver: zodResolver(PersonalInfoFormSchema),
    defaultValues: formData,
  });

  const onSubmit = (data: TPersonalInfoFormSchema) => {
    console.log(data);
    dispatch(updatePersonalInfo(data));
    dispatch(nextStep());
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white rounded-2xl shadow-lg min-w-[600px] min-h-[390px]">
      <h1 className="text-3xl font-bold mb-8">Fill out the box</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Go Next</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
