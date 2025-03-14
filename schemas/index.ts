import * as z from "zod";

export const RegisterSchema = z.object({
    name: z.string().min(5, {
      message: "Username must be at least 5 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
        message: "Confirm Password must be at least 8 characters.",
    }),
  })