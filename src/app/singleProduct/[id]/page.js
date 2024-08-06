"use client";

import { useEffect, useState } from "react";

const getData = async (id) => {
  const req = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await req.json();
  return data;
};

const SingleProduct = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getData(id).then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src={product.thumbnail}
          alt={product.title}
          className=" h-64 object-cover mb-4 rounded-lg"
        />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          {product.title}
        </h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <span className="text-2xl font-bold text-gray-800">
          ${product.price}
        </span>
      </div>
    </div>
  );
};

export default SingleProduct;
