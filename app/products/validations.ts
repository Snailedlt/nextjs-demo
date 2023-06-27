import { z } from "zod";
import { products } from "~/db/schema";

export const productSchema = z.object({
  name: z.string().min(1, {
    message: "Must be at least 1 character",
  }),
  tag: z
    .enum(products.tag.enumValues, {
      required_error: "Must be a valid tag",
    })
    .default(products.tag.enumValues[0]),
});
