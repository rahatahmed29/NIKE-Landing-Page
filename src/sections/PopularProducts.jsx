import React from "react";
import { products } from "../constants";
import ProductCard from "../components/ProductCard";

function PopularProducts() {
  return (
    <section id="products" className="w-full max-container mt-14">
      <h1 className="text-4xl font-bold font-palanquin  mb-8">Our <span className="text-coral-red">Popular </span>Products</h1>
      <p className="font-montserrat text-slate-gray mb-14 lg:max-w-lg">Experiance top notch quality and style with our sought-after selections. Discover the world of comfort,design and value </p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center  gap-5 items-center">
      {products.map((product) => (
         <ProductCard key={product} product={product} />
      ))}
    </div>
    </section>
  );
}

export default PopularProducts;
