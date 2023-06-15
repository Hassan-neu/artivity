import Link from "next/link";
import React, { useEffect } from "react";
import { runConfetti } from "@/libs/confetti";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "@/hooks/stateContext";
const SuccessPage = () => {
    const { setTotalQty, setCartItems, setTotalPrice, setTotalFee, setQty } =
        useStateContext();
    useEffect(() => {
        runConfetti();
        setQty(1);
        setTotalFee(0);
        setTotalQty(0);
        setCartItems([]);
        setTotalPrice(0);
    }, []);
    return (
        <div className="success_wrapper">
            <div className="success_container">
                <div className="success-box">
                    <BsBagCheckFill size={80} style={{ color: "#d06224" }} />
                    <div className="success-text">
                        Thanks for the patronage your order was successful
                    </div>
                    <div className="success-text">
                        Your Order is on it way to your address
                    </div>
                    <div className="success-btn">
                        <button type="button">
                            <Link href="/gallery" style={{ color: "#fff" }}>
                                Continue Shopping
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
