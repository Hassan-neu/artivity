import React from "react";
import CartItem from "@/components/cartItem";
import { useStateContext } from "@/hooks/stateContext";
const Cart = () => {
    const { cartItems, totalQty, totalPrice } = useStateContext();
    return (
        <div className="cart_wrapper">
            <div className="cart_container">
                <div className="cart-artwrks">
                    <div className="cart-count">
                        <h3>Cart ({totalQty})</h3>
                    </div>
                    {cartItems.length < 1 && <h2>Your Cart is Empty</h2>}
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <div className="cart-subtotal">
                    <div className="subtotal-head">
                        <h3>Cart summary</h3>
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
