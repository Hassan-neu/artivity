import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useStateContext } from "@/hooks/stateContext";
const Navbar = () => {
    const { totalQty } = useStateContext();
    return (
        <div className="navbar">
            <div className="nav-logo">
                <Link href="/">
                    <h3>ARTIVITY</h3>
                </Link>
            </div>
            <div className="nav-sign">
                {/* <button type="button">SIGN IN</button> */}
                <Link href="/user/wishlist">Saved items</Link>
                <FaRegUser size={30} />
            </div>
            <div className="nav-cart">
                <Link href="/cart">
                    <RiShoppingCart2Line size={30} />
                </Link>
                <span className="item-qty">{totalQty}</span>
            </div>
        </div>
    );
};

export default Navbar;
