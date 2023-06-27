"use server";

import { db } from "~/db";
import { NewProduct, products } from "~/db/schema";

export const addProductAction = async (product: NewProduct) => {
  await db.insert(products).values(product);
};
