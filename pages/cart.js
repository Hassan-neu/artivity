import React from "react";
import CartItem from "@/components/cartItem";
import { useStateContext } from "@/hooks/stateContext";
import Link from "next/link";
const Cart = () => {
    const { cartItems, totalQty, totalPrice } = useStateContext();
    return (
        <div className="cart_wrapper">
            <div className="cart_container">
                <div className="cart-artwrks">
                    <div className="cart-count">
                        <p>Cart ({totalQty})</p>
                    </div>
                    {cartItems.length < 1 && (
                        <p>
                            Your Cart is Empty... Continue{" "}
                            <Link href={"/market"} style={{ color: "#d06224" }}>
                                Shopping
                            </Link>
                        </p>
                    )}
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <div className="cart-subtotal">
                    <div className="subtotal-head">
                        <p>Cart summary</p>
                    </div>
                    <div className="checkout-dets">
                        <p>Subtotal:</p>
                        <h3>
                            $
                            {totalPrice
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </h3>
                    </div>
                    <div className="checkout-btn">
                        <button type="button">
                            CHECKOUT ( $
                            {totalPrice
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            )
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
