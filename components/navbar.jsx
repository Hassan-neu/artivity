import Link from "next/link";
import React, { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegUser, FaBars } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "@/hooks/stateContext";
import ProfileMenu from "./profileMenu";
const Navbar = () => {
    const { totalQty } = useStateContext();
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar">
            <div className="mobile_ham" onClick={() => setOpen(!open)}>
                {open ? <RxCross2 size={20} /> : <FaBars size={20} />}
            </div>
            <div className="nav-logo">
                <Link href="/">
                    <h3>ARTIVITY</h3>
                </Link>
            </div>
            <div className="nav-sign">
                {/* {session.user.name && (
                    <div>{session.user.name.split(" ")[0]}</div>
                )} */}
                <Link href="/user">
                    <FaRegUser size={30} />
                </Link>
            </div>
            <ProfileMenu className={`mobile_menu ${open ? "active" : ""}`} />
            <div className="nav-gallery">
                <Link href="/gallery">
                    <TfiGallery size={30} />
                </Link>
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
