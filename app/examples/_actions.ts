"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "~/db";
import { NewProduct, example, products } from "~/db/schema";

export const addProductAction = async (product: NewProduct) => {
  await db.insert(products).values(product);
};

export const addExampleAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  await db.insert(example).values({ name });
  revalidatePath("/products");
};

export const removeExampleAction = async (id: number) => {
  "use server";
  await db.delete(example).where(eq(example.id, id));
  revalidatePath("/products");
};
