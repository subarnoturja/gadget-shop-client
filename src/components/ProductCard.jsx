import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg border-1 shadow-md mb-4">
      <img
        src={product.imageURL}
        alt="Product Image"
        className="w-full h-60 object-cover rounded-t-lg"
      />
      <div className="p-2">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <h2 className="text-lg font-semibold">{product.brand}</h2>
        <h2 className="text-sm">
          Price: $<span className="text-red-600">{product.price}</span>
        </h2>
        <h2 className="text-sm">
          In Stock: <span className="text-green-600">{product.stock}</span>
        </h2>
        <h2 className="text-sm font-semibold">{product.category}</h2>
        <p className="text-xs mt-2">
          {product.description.length < 50
            ? `${product.description}`
            : `${product.description.slice(0, 50)}...`}
        </p>
        <div className="mt-4">
          <button className="btn btn-sm w-full">Add To Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
