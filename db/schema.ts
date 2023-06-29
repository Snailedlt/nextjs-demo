import { mysqlEnum, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { InferModel } from "drizzle-orm";

export const products = mysqlTable("products", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }).notNull(),
  tag: mysqlEnum("tag", ["other", "food", "drink"]).notNull(),
});

export type Product = InferModel<typeof products, "select">;
export type NewProduct = Omit<InferModel<typeof products, "insert">, "id">;

export const example = mysqlTable("example", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }).notNull(),
});

export type Example = InferModel<typeof example, "select">;
export type NewExample = Omit<InferModel<typeof example, "insert">, "id">;

export const countries = mysqlTable("countries", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }).notNull(),
});

export type Country = InferModel<typeof countries, "select">;
export type NewCountry = Omit<InferModel<typeof countries, "insert">, "id">;
