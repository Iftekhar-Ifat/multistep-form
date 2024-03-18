import { z } from "zod";

const phoneRegex = new RegExp(/^(?:\+?880|0)?1[3-9]\d{8}$/);

export const PersonalInfoFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name must be at least 1 character long." })
    .max(10, { message: "First Name must be at most 10 characters long." }),
  lastName: z
    .string()
    .min(1, { message: "First Name must be at least 1 character long." })
    .max(10, { message: "First Name must be at most 10 characters long." }),
  email: z.string().email({ message: "Invalid email format." }),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
});

export const ProductInfoFormSchema = z.object({
  timeline: z.string({
    required_error: "Please select a timeline.",
  }),
  products: z.string().optional(),
});

export const ServiceInfoFormSchema = z.object({
  services: z.enum(["web-design", "app-design", "ui/ux-design"], {
    required_error: "You need to select an option.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

export type TProductInfoFormSchema = z.infer<typeof ProductInfoFormSchema>;
export type TPersonalInfoFormSchema = z.infer<typeof PersonalInfoFormSchema>;
export type TServiceInfoFormSchema = z.infer<typeof ServiceInfoFormSchema>;
