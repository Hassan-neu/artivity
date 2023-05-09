import React from "react";
import CartItem from "@/components/cartItem";
const Cart = () => {
    return (
        <div className="cart_wrapper">
            <div className="cart_container">
                <div className="cart-artwrks">
                    <div className="cart-count">
                        <h3>Cart (0)</h3>
                    </div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className="cart-subtotal">
                    <div className="subtotal-head">
                        <h3>Cart summary</h3>
                    </div>
                    <div className="checkout-dets">
                        <p>Subtotal</p>
                        <h3># 20000</h3>
                    </div>
                    <div className="checkout-btn">
                        <button type="button">CHECKOUT (30000)</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
