"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../ui/button";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Textarea } from "../../ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { previousStep } from "@/store/form-navigation/formNavigationSlice";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  ServiceInfoFormSchema,
  TServiceInfoFormSchema,
} from "@/validation/form-validation";
import { RootState } from "@/store/store";
import { updateServiceInfo } from "@/store/form-data/formSlice";
import { useRouter } from "next/navigation";

export default function ServiceInfoForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.formData);

  const form = useForm<TServiceInfoFormSchema>({
    resolver: zodResolver(ServiceInfoFormSchema),
    defaultValues: formData.serviceInfo,
  });

  const onSubmit = (data: TServiceInfoFormSchema) => {
    dispatch(updateServiceInfo(data));
    router.push("/confirm");
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white rounded-2xl shadow-lg min-w-[600px]">
      <h2 className="text-3xl font-bold mb-8">Fill out the box</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Services</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="web-design" />
                      </FormControl>
                      <FormLabel className="font-normal">Web Design</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="app-design" />
                      </FormControl>
                      <FormLabel className="font-normal">App Design</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="ui/ux-design" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        UI/UX Design
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your message ..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <Button onClick={() => dispatch(previousStep())} variant="outline">
              Go Back
            </Button>
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
