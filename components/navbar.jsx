import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <Link href="/">
                    <h3>ARTIVITY</h3>
                </Link>
            </div>
            <div className="nav-sign">
                <button type="button">SIGN IN</button>
            </div>
            <div className="nav-cart">
                <Link href="/cart">
                    <RiShoppingCart2Line />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
