import { db } from "~/db";
import { NewExample } from "./new-example";
import { BananaFunsiesDisplay } from "./banana-funsies-display";

const ProductsPage = async () => {
  const examples = await db.query.example.findMany({
    orderBy: (column, sort) => sort.desc(column.id),
  });
  return (
    <div className="space-y-8 flex flex-col gap-4 justify-center items-center m-2">
      <div key={examples?.[0]?.id}>
        <NewExample />
      </div>
      <div className="flex flex-col gap-4">
        <h1>Examples</h1>
        <BananaFunsiesDisplay examples={examples} />
      </div>
    </div>
  );
};

export default ProductsPage;
