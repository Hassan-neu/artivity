import React from "react";
import { RiAddLine, RiDeleteBinLine, RiSubtractLine } from "react-icons/ri";
import Image from "next/image";
const CartItem = () => {
    return (
        <div className="cart-item">
            <div className="cart-products">
                <div className="art-dets">
                    <Image src="" width={100} height={100} alt="" />
                    <div className="artwrk-title">
                        <h4>NightHawks</h4>
                        <p>Edward Hopper</p>
                    </div>
                </div>
                <div className="artwrk-total">$10000</div>
            </div>
            <div className="cart-optn">
                <button type="buton">
                    <div className="cart-rmv">
                        <RiDeleteBinLine />
                        <p>Remove</p>
                    </div>
                </button>

                <div className="cart-ctrl">
                    <div className="cart-dec">
                        <button type="button">
                            <RiSubtractLine />
                        </button>
                    </div>
                    <div className="order-qty">
                        <p>0</p>
                    </div>
                    <div className="cart-inc">
                        <button type="button">
                            <RiAddLine />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
