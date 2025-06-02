import { z } from "zod";

export const Schema = z.object({
   name: z.string().min(3),
   email: z.string().email(),
});

export const ProductSchema = z.object({
   name: z.string().min(3),
   price: z.number(),
});
