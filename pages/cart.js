import React from "react";
import CartItem from "@/components/cartItem";
import { useStateContext } from "@/hooks/stateContext";
import Link from "next/link";
const Cart = () => {
    const { cartItems, totalQty, totalPrice, setTotalFee } = useStateContext();
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
                    <div className="cart-list">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
                <div className="cart-subtotal">
                    <div className="subtotal-head">
                        <p>Cart summary</p>
                    </div>
                    <div className="checkout-dets">
                        <p>Subtotal:</p>
                        <p>
                            $
                            {totalPrice
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                    </div>
                    <div className="checkout-btn">
                        <button
                            type="button"
                            onClick={() =>
                                setTotalFee(totalPrice + totalPrice * 0.05)
                            }
                        >
                            <Link
                                href={"/checkout"}
                                style={{
                                    color: "#fff",
                                    width: "100%",
                                    display: "block",
                                }}
                            >
                                CHECKOUT ( $
                                {totalPrice
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                )
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
