import React from "react";
import PropTypes from "prop-types";

const ProductShowcase = ({ products }) => {
  return (
    <div className="border p-4 rounded-lg bg-gray-100">
      <h2 className="text-lg font-semibold mb-2">Products</h2>
      <ul className="list-disc pl-4">
        {products.length > 0 ? (
          products.map((product, index) => <li key={index}>{product}</li>)
        ) : (
          <p>Loading products...</p>
        )}
      </ul>
    </div>
  );
};
ProductShowcase.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductShowcase;
