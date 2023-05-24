import React from "react";
import { useSession } from "next-auth/react";
const Checkout = () => {
    const { data: session } = useSession();
    return (
        <div className="checkout_wrapper">
            <div className="checkout_container">
                <div className="checkout-info">
                    <div className="checkout-personal">
                        <h5>PERSONAL DETAILS</h5>
                        <div className="personal-input">
                            <div className="first">
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    value={session.user.name.split(" ")[0]}
                                />
                            </div>
                            <div className="last">
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    value={session.user.name.split(" ")[1]}
                                />
                            </div>
                            <div className="email">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={session.user.email}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="checkout-shipping">
                        <h5>SHIPPING DETAILS</h5>
                        <div className="shipping-input">
                            <div className="street">
                                <input type="text" name="street" id="street" />
                            </div>
                            <div className="zip">
                                <input type="text" name="zip" id="zip" />
                            </div>
                            <div className="city">
                                <input type="text" name="city" id="city" />
                            </div>
                            <div className="country">
                                <input
                                    type="text"
                                    name="country"
                                    id="country"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-subtotal">
                    <div className="subtotal-head">
                        <p>Order summary</p>
                    </div>
                    <div className="checkout-dets">
                        <p>Items&apos;s total:</p>
                        <p>
                            $
                            {(10000000)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                    </div>
                    <div className="checkout-dets">
                        <p>Delivery fees:</p>
                        <p>
                            $
                            {(10000000)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                    </div>
                    <div className="checkout-dets">
                        <p>Total:</p>
                        <p>
                            $
                            {(10000000)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                    </div>
                    <div className="checkout-btn">
                        <button type="button">CONFIRM ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
