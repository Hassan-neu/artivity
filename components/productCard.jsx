import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import { urlFor } from "@/libs/client";
import Link from "next/link";
import { useStateContext } from "@/hooks/stateContext";
const ProductCard = ({ product }) => {
    const { addToCart, toSaveArts } = useStateContext();
    const { artiste, image, name, price, year, slug, _id } = product;
    return (
        <div className="product-card">
            <div className="product-image">
                <Link href={`/artwork/${slug.current}`}>
                    <Image
                        src={urlFor(image[0]).url()}
                        width={200}
                        height={200}
                        alt={name}
                    />
                </Link>
                <div
                    className="like-icon"
                    onClick={() => {
                        toSaveArts(image, artiste, name, price, _id, slug);
                    }}
                >
                    <AiOutlineHeart fill="#fff" />
                </div>
            </div>
            <div className="product-details">
                <div className="product-name">
                    {name} ({year})
                </div>
                <div className="product-price">
                    ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
            </div>
            <div className="product-artiste">{artiste}</div>

            <div className="btn-add">
                <button
                    type="button"
                    onClick={() => {
                        addToCart(image, artiste, name, price, 1, _id);
                    }}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
