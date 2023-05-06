import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import { urlFor } from "@/libs/client";
const ProductCard = ({ product }) => {
    const { artiste, image, name, price } = product;
    return (
        <div className="product-card">
            <div className="product-image">
                <Image
                    src={urlFor(image[0]).url()}
                    width={200}
                    height={200}
                    alt="monalisa"
                />
                <div className="like-icon">
                    <AiOutlineHeart fill="#ff" />
                </div>
            </div>
            <div className="product-details">
                <div className="product-artiste">{artiste}</div>
                <div className="product-price">
                    ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
            </div>
            <div className="product-name">{name}</div>
            <div className="btn-add">
                <button type="button">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
