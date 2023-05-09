import Link from "next/link";
import React from "react";
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
        </div>
    );
};

export default Navbar;
