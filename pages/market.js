import Head from "next/head";
import React from "react";
import SearchAction from "@/components/searchAction";
import Products from "@/components/products";
import MarkertBanner from "@/components/markertBanner";
const Market = () => {
    return (
        <>
            <Head>
                <title>ARTIVITY | MARKET</title>
            </Head>
            <div className="market_wrapper">
                <div className="market_container">
                    <MarkertBanner />
                    <SearchAction />
                    <Products />
                </div>
            </div>
        </>
    );
};

export default Market;
