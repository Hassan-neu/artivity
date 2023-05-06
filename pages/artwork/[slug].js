import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { client, urlFor } from "@/libs/client";
import { RiSubtractLine, RiAddLine } from "react-icons/ri";
const ArtPage = ({ product }) => {
    const { image, name, artiste, description, price } = product;
    return (
        <div className="artwrk_wrapper">
            <div className="artwrk_container">
                <div className="artwrk-image">
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
                        <div className="artwrk-descr">{description}</div>
                        <div className="artwrk-rating">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>

                    <div className="artwrk-price">
                        $
                        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                    <div className="artwrk-order--optn">
                        <div className="qty-ctrl">
                            <div className="add">
                                <RiSubtractLine />
                            </div>
                            <div className="order-qty">1</div>
                            <div className="dec">
                                <RiAddLine />
                            </div>
                        </div>
                        <div className="order-actn">
                            <button type="button">Add to Cart</button>
                            <button type="button">Buy Now</button>
                        </div>
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
    return {
        props: {
            product,
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
