import React from "react";
import ProductCard from "./productCard";
const Products = ({ products }) => {
    return (
        <div className="products_wrapper">
            <div className="products_container">
                {products.map((product) => {
                    return <ProductCard key={product._id} product={product} />;
                })}
            </div>
        </div>
    );
};

export default Products;
