import { z } from "zod";
export const schema = z.object({
  username: z.string().min(4, "Username min 4 symbol"),
  email: z
    .string()
    .min(4, "Email min 4 symbol")
    .email("Incorrect format")
    .refine((value) => value !== "admin@gmail.com", {
      message: "Reserved Email",
    }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
