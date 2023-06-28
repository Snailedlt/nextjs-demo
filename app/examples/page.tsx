import { NewExample } from "./new-example";
import { ReadExamples } from "./read-examples";

const ProductsPage = async () => {
  return (
    <div className="space-y-8 flex flex-col gap-4 justify-center items-center m-2">
      <NewExample />
      <ReadExamples />
    </div>
  );
};

export default ProductsPage;
