"use client";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewProduct, Product, products } from "~/db/schema";
import { productSchema } from "./validations";
import { addProductAction } from "./_actions";

const CreateProductForm = () => {
  // 1. Define your form.
  const form = useForm<NewProduct>({
    resolver: zodResolver(productSchema),
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: NewProduct) => {
    await addProductAction(values);
    form.reset(); // this is currently not as expected.
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Product</CardTitle>
        <CardDescription>Create a product, give it a name!</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="grid w-full items-center gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the name of the product that will be displayed.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tag"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Tag</FormLabel>
                  <Select
                    onValueChange={(value: Product["tag"]) =>
                      field.onChange(value)
                    }
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product tag!" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {products.tag.enumValues.map((tag) => (
                        <SelectItem key={tag} value={tag}>
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose a tag for the product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Submit</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default CreateProductForm;
