import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineArrowLeft } from "react-icons/ai";
import { client, urlFor } from "@/libs/client";
import ByArtiste from "@/components/byArtiste";
import {
    RiSubtractLine,
    RiAddLine,
    RiTruckLine,
    RiClipboardLine,
} from "react-icons/ri";
import { useStateContext } from "@/hooks/stateContext";
import Link from "next/link";
const ArtPage = ({ product, moreByArtiste }) => {
    const {
        qty,
        incQty,
        decQty,
        addToCart,
        setTotalFee,
        setTotalPrice,
        totalPrice,
    } = useStateContext();
    const { image, name, artiste, description, price, _id } = product;

    return (
        <div className="artwrk_wrapper">
            <div className="artwrk_container">
                <div className="artwrk-top">
                    <div className="artwrk-image">
                        <Link
                            href="/gallery"
                            style={{
                                color: "#d06224",
                                display: "flex",
                                alignItems: "center",
                                gap: ".2rem",
                                marginBottom: ".5rem",
                            }}
                        >
                            <AiOutlineArrowLeft /> Back
                        </Link>
                        <Image
                            src={urlFor(image[0]).url()}
                            width={500}
                            height={600}
                            alt="NightHawks"
                        />
                    </div>
                    <div className="artwrk-details">
                        <div className="artwrk-profile">
                            <div className="artwrk-name">{name}</div>
                            <div className="artwrk-artiste">{artiste}</div>
                            <div className="artwrk-rating">
                                <AiFillStar fill="#F0A500" />
                                <AiFillStar fill="#F0A500" />
                                <AiFillStar fill="#F0A500" />
                                <AiFillStar fill="#F0A500" />
                            </div>
                            <div className="artwrk-descr">{description}</div>
                        </div>

                        <div className="artwrk-price">
                            $
                            {price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className="artwrk-order--optn">
                            <div className="qty-ctrl">
                                <div className="dec">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            decQty();
                                        }}
                                    >
                                        <RiSubtractLine fill="#D06224" />
                                    </button>
                                </div>
                                <div className="order-qty">
                                    <p>{qty}</p>
                                </div>
                                <div className="inc">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            incQty();
                                        }}
                                    >
                                        <RiAddLine fill="#D06224" />
                                    </button>
                                </div>
                            </div>
                            <div className="order-actn">
                                <button
                                    type="button"
                                    onClick={() => {
                                        addToCart(
                                            image,
                                            artiste,
                                            name,
                                            price,
                                            qty,
                                            _id
                                        );
                                    }}
                                >
                                    Add to Cart
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setTotalFee(
                                            totalPrice + totalPrice * 0.05
                                        ),
                                            setTotalPrice(price * qty);
                                    }}
                                >
                                    <Link
                                        href={"/checkout"}
                                        style={{
                                            color: "#d06224",
                                            width: "100%",
                                            display: "block",
                                        }}
                                    >
                                        Buy Now
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className="delivery-terms">
                            <div className="delivery-free">
                                <div className="icn">
                                    <RiTruckLine fill="#d06224" />
                                </div>
                                <div className="delivery-det">
                                    <h4>Free Delivery</h4>
                                    <p>Enter Email and Delivery address here</p>
                                </div>
                            </div>
                            <div className="delivery-return">
                                <div className="icn">
                                    <RiClipboardLine fill="#d06224" />
                                </div>
                                <div className="delivery-det">
                                    <h4>Return Delivery</h4>
                                    <p>Free 30days delivery return</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="artwrk-btm">
                    {moreByArtiste.length > 0 && (
                        <h4>More from same Artiste:</h4>
                    )}

                    <div className="artwork-byartiste">
                        {moreByArtiste.map((artiste) => (
                            <ByArtiste key={artiste._id} byArtiste={artiste} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtPage;

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type=='products' && slug.current=='${slug}'][0]`;
    const product = await client.fetch(query);
    const artistQuery = `*[_type=='products' && artiste=='${product.artiste}' && slug.current!='${slug}']`;

    const moreByArtiste = await client.fetch(artistQuery);
    return {
        props: {
            product,
            moreByArtiste,
        },
    };
};
export const getStaticPaths = async () => {
    const query = `*[_type=='products']`;
    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current,
        },
    }));
    return {
        paths,
        fallback: false,
    };
};
