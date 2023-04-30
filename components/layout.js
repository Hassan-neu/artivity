import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
const Layout = ({ children }) => {
    return (
        <div className="layout_wrapper">
            <Head>
                <title>ARTIVITY | HOME</title>
            </Head>
            <header>
                <Navbar />
            </header>
            {children}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;