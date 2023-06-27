import { Button } from "~/components/ui/button";
import ReadProducts from "./read-products";
import CreateProductForm from "./create-product-form";

const ProductsPage = () => {
  return (
    <div className="space-y-8 flex flex-col gap-4 justify-center items-center m-2">
      <h1>Products Page</h1>
      <ReadProducts />
      <CreateProductForm />
    </div>
  );
};

export default ProductsPage;
