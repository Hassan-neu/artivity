import Head from "next/head";
import React from "react";
import Products from "@/components/products";
import MarkertBanner from "@/components/markertBanner";
import { client } from "@/libs/client";
const Market = ({ products }) => {
    return (
        <>
            <Head>
                <title>ARTIVITY | MARKET</title>
            </Head>
            <div className="market_wrapper">
                <div className="market_container">
                    <MarkertBanner />
                    <Products products={products} />
                </div>
            </div>
        </>
    );
};

export default Market;

export const getServerSideProps = async () => {
    const query = `*[_type=='products']`;

    const products = await client.fetch(query);
    return {
        props: {
            products,
        },
    };
};
