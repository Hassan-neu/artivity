import React from "react";
import { getSession } from "next-auth/react";
import { useStateContext } from "@/hooks/stateContext";
import { usePaystackPayment } from "react-paystack";
import { useRouter } from "next/router";
const Checkout = ({ session }) => {
    const router = useRouter();
    const { totalPrice, totalFee } = useStateContext();
    const config = {
        reference: new Date().getTime().toString(),
        email: session.user.email,
        amount: totalFee,
        publicKey: "pk_test_d6ac81974b42368a4d3845ac89ba4ad84939000e",
    };
    const initializePayment = usePaystackPayment(config);

    function onSucess(reference) {
        router.push("/checkout/success");
        console.log({ reference });
    }
    function onClose() {
        router.back();
        console.log("closed");
    }
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
                                    readOnly
                                    value={session.user.name.split(" ")[0]}
                                />
                            </div>
                            <div className="last">
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    readOnly
                                    value={session.user.name.split(" ")[1]}
                                />
                            </div>
                            <div className="email">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    readOnly
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
                    <div className="checkout-head">
                        <p>Order summary</p>
                    </div>
                    <div className="checkout-dets">
                        <p>Items&apos;s total:</p>
                        <p>
                            $
                            {totalPrice
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                    </div>
                    <div className="checkout-dets">
                        <p>Delivery fees:</p>
                        <p>
                            $
                            {(totalPrice * 0.05)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                    </div>
                    <div className="checkout-dets">
                        <p>Total:</p>
                        <p>
                            $
                            {totalFee
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                    </div>
                    <div
                        className="checkout-btn"
                        onClick={() => {
                            initializePayment(onSucess, onClose);
                        }}
                    >
                        <button type="button">CONFIRM ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
    return {
        props: {
            session,
        },
    };
};
