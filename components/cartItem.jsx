import React from "react";
import { RiAddLine, RiDeleteBinLine, RiSubtractLine } from "react-icons/ri";
import Image from "next/image";
import { urlFor } from "@/libs/client";
import { useStateContext } from "@/hooks/stateContext";
const CartItem = ({ item }) => {
    const { toRemove, cartQtyToggle } = useStateContext();
    const { image, artiste, name, price, itmQty, id } = item;
    return (
        <div className="cart-item">
            <div className="cart-products">
                <div className="art-dets">
                    <Image
                        src={urlFor(image[0]).url()}
                        width={100}
                        height={100}
                        alt={name}
                    />
                    <div className="artwrk-title">
                        <h4>{name}</h4>
                        <p>{artiste}</p>
                    </div>
                </div>
                <div className="artwrk-total">
                    ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
            </div>
            <div className="cart-optn">
                <button type="buton">
                    <div className="cart-rmv" onClick={() => toRemove(id)}>
                        <RiDeleteBinLine />
                        <p>Remove</p>
                    </div>
                </button>

                <div className="cart-ctrl">
                    <div
                        className="cart-dec"
                        onClick={() => cartQtyToggle(id, "dec")}
                    >
                        <button type="button">
                            <RiSubtractLine fill="#d06224" />
                        </button>
                    </div>
                    <div className="order-qty">
                        <p>{itmQty}</p>
                    </div>
                    <div
                        className="cart-inc"
                        onClick={() => cartQtyToggle(id, "inc")}
                    >
                        <button type="button">
                            <RiAddLine fill="#d06224" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
