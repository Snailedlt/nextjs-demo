import { db } from "~/db";

const ReadProducts = async () => {
  const allProducts = await db.query?.products.findMany();
  return (
    <>
      {allProducts?.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
        </div>
      ))}
    </>
  );
};

export default ReadProducts;
