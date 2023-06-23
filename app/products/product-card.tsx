// A Product Card styled with tailwind
const ProductCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="text-2xl">Product Title</div>
        <div className="text-lg">Product Description</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-lg">Product Price</div>
        <div className="text-lg">Product Quantity</div>
      </div>
    </div>
  );
};

export default ProductCard;
