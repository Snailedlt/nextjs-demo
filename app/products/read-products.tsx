import { db } from "~/db";

const ReadProducts = async () => {
  const allProducts = await db.query?.products.findMany();
  return (
    <div className="grid grid-cols-2 gap-4">
      {allProducts?.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default ReadProducts;
