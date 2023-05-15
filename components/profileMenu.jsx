import Link from "next/link";
import React from "react";

const ProfileMenu = () => {
    return (
        <div className="menu_container">
            <div className="account">
                <Link href="/user">My Account</Link>
            </div>
            <div className="wishlist">
                <Link href="/user/wishlist">Wishlist</Link>
            </div>
            <div className="details-edit">
                <Link href="/user/editdetails">Edit details</Link>
            </div>
            <div className="signout-btn">
                <button type="button"> Sign Out</button>
            </div>
        </div>
    );
};

export default ProfileMenu;
