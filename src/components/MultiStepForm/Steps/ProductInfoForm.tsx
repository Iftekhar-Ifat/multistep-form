"use client";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import {
  nextStep,
  previousStep,
} from "@/store/form-navigation/formNavigationSlice";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  ProductInfoFormSchema,
  TProductInfoFormSchema,
} from "@/validation/form-validation";

export default function ProductInfoForm() {
  const dispatch = useDispatch();
  const form = useForm<TProductInfoFormSchema>({
    resolver: zodResolver(ProductInfoFormSchema),
  });

  const [allProducts, setAllProducts] = useState<string[]>([]);

  const handleAddProduct = (value: string) => {
    if (!value) {
      form.setError("products", {
        type: "custom",
        message: "Cannot add empty products",
      });
    } else {
      form.clearErrors("products");
      setAllProducts([...allProducts, value]);
    }
  };

  const onSubmit = (data: TProductInfoFormSchema) => {
    const formData = {
      timeline: data.timeline,
      products: allProducts,
    };
    console.log(formData);
    dispatch(nextStep());
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white rounded-2xl shadow-lg min-w-[600px] min-h-[390px]">
      <h1 className="text-3xl font-bold mb-8">Fill out the box</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Timeline</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a timeline" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="within-1-week">Within 1 week</SelectItem>
                    <SelectItem value="within-2-week">
                      Within 2 weeks
                    </SelectItem>
                    <SelectItem value="within-1-month">
                      Within 1 month
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="products"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold mb-2" htmlFor="products">
                  Product
                </FormLabel>
                <div className="flex items-center">
                  <FormControl>
                    <Input
                      className="flex-1"
                      id="products"
                      placeholder="Enter product"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    type="button"
                    className="ml-2"
                    variant="secondary"
                    size="icon"
                    onClick={(event) => {
                      event.preventDefault(), handleAddProduct(field.value);
                    }}
                  >
                    <PlusIcon />
                  </Button>
                </div>
                <FormMessage />
                <div>
                  <h2 className="text-lg font-semibold mb-4">Products:</h2>
                  {!allProducts.length ? (
                    <span className="text-red-500">No products added</span>
                  ) : null}
                  <ul>
                    {allProducts.map((product, index) => (
                      <li key={index}>{product}</li>
                    ))}
                  </ul>
                </div>
              </FormItem>
            )}
          />
          <div className="flex justify-between mt-4">
            <Button onClick={() => dispatch(previousStep())} variant="outline">
              Go Back
            </Button>
            <Button type="submit">Go Next</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
