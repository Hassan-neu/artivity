import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="product-image">
                <Image
                    src="/monalisa.jpg"
                    width={200}
                    height={200}
                    alt="monalisa"
                />
                <div className="like-icon">
                    <AiOutlineHeart fill="#ff" />
                </div>
            </div>
            <div className="product-details">
                <div className="product-artiste">Picasso</div>
                <div className="product-price">$100</div>
            </div>
            <div className="product-name">MONALISA</div>
            <div className="btn-add">
                <button type="button">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
