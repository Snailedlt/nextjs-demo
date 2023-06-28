import CreateProductForm from "./create-product-form";
import ReadProducts from "./read-products";

const ProductsPage = async () => {
  return (
    <div className="space-y-8 flex flex-col gap-4 justify-center items-center m-2">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="flex gap-2">
        <CreateProductForm />
        <ReadProducts />
      </div>
    </div>
  );
};

export default ProductsPage;
