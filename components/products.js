import React from "react";
import ProductCard from "./productCard";
const Products = () => {
    return (
        <div className="products_wrapper">
            <div className="products_container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default Products;
