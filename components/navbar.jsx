import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useStateContext } from "@/hooks/stateContext";
import { useSession } from "next-auth/react";
const Navbar = () => {
    const { data: session } = useSession();
    const { totalQty } = useStateContext();
    console.log({ session });
    return (
        <div className="navbar">
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
