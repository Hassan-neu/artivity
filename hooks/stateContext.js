import React, { useContext, createContext, useState } from "react";
const Context = createContext();
export const StateContext = ({ children }) => {
    const [qty, setQty] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    };
    const decQty = () => {
        setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1));
    };
    const addToCart = (image, artiste, name, price, itmQty, id) => {
        const checkItem = cartItems.find((item) => item.id === id);

        if (checkItem) {
            const newCart = cartItems.filter((item) => item.id !== id);
            return (
                setCartItems([...newCart, { ...checkItem, itmQty: qty }]),
                setTotalQty(
                    (prevTotal) =>
                        qty + ((prevTotal ? prevTotal : 1) - checkItem.itmQty)
                )
            );
        }
        const itemsToAdd = { image, artiste, name, price, itmQty, id };
        setQty(1);
        setCartItems((prevCart) => [...prevCart, itemsToAdd]);
        setTotalQty((prevTotal) => prevTotal + qty);
    };
    return (
        <Context.Provider
            value={{
                incQty,
                qty,
                decQty,
                addToCart,
                cartItems,
                setQty,
                setTotalQty,
                totalQty,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
