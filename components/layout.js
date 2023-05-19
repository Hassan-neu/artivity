import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
const Layout = ({ children }) => {
    return (
        <div className="layout_wrapper">
            <Head>
                <title>ARTIVITY | HOME</title>
                <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
            </Head>
            <header>
                <Navbar />
            </header>
            <div className="layout_container">{children}</div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
