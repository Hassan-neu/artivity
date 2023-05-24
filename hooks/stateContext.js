import React, { useContext, createContext, useState, useEffect } from "react";
const Context = createContext();
export const StateContext = ({ children }) => {
    const [qty, setQty] = useState(1);
    const [totalQty, setTotalQty] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [wishList, setWishList] = useState([]);
    const [totalFee, setTotalFee] = useState(0);
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    };
    const decQty = () => {
        setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1));
    };
    const addToCart = (image, artiste, name, price, itmQty, id) => {
        const checkItem = cartItems.find((item) => item.id === id);

        if (checkItem) {
            return (
                setCartItems((prevCart) =>
                    prevCart.map((item) => {
                        if (item.id === id) {
                            return { ...item, itmQty: qty };
                        }
                        return item;
                    })
                ),
                setTotalQty(
                    (prevTotal) => qty + (prevTotal - checkItem.itmQty)
                ),
                setTotalPrice(
                    (prevPrice) =>
                        prevPrice - checkItem.price * (checkItem.itmQty - qty)
                )
            );
        }
        const itemsToAdd = { image, artiste, name, price, itmQty, id };
        setQty(1);
        setCartItems((prevCart) => [...prevCart, itemsToAdd]);
        setTotalQty((prevTotal) => prevTotal + qty);
        setTotalPrice((prevPrice) => prevPrice + itmQty * price);
    };
    const toRemove = (id) => {
        const toPurge = cartItems.find((item) => item.id === id);
        const newCartItems = cartItems.filter((items) => items.id !== id);
        setCartItems(newCartItems);
        setTotalQty((prevTotal) => prevTotal - toPurge.itmQty);
        setTotalPrice(
            (prevPrice) => prevPrice - toPurge.itmQty * toPurge.price
        );
    };
    const cartQtyToggle = (id, type) => {
        const toToggle = cartItems.find((item) => item.id === id);
        if (type === "inc") {
            setCartItems((prevCart) =>
                prevCart.map((item) => {
                    if (item.id === id) {
                        return { ...item, itmQty: toToggle.itmQty + 1 };
                    }
                    return item;
                })
            );
            setTotalQty((prevTotal) => prevTotal + 1);
            setTotalPrice((prevPrice) => prevPrice + toToggle.price);
        }
        if (type === "dec") {
            if (toToggle.itmQty > 1) {
                setCartItems((prevCart) =>
                    prevCart.map((item) => {
                        if (item.id === id) {
                            return { ...item, itmQty: toToggle.itmQty - 1 };
                        }
                        return item;
                    })
                );
                setTotalQty((prevTotal) => prevTotal - 1);
                setTotalPrice((prevPrice) => prevPrice - toToggle.price);
            }
        }
    };
    const toSaveArts = (image, artiste, name, price, id, slug) => {
        const itemsToAdd = { image, artiste, name, price, id, slug };
        const checkItem = wishList.find((list) => list.id === id);
        if (checkItem) return;
        setWishList((prevList) => [...prevList, itemsToAdd]);
    };
    const toRemoveArt = (id) => {
        const newList = wishList.filter((list) => list.id !== id);
        setWishList(newList);
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
                totalPrice,
                toRemove,
                cartQtyToggle,
                wishList,
                toSaveArts,
                toRemoveArt,
                totalFee,
                setTotalFee,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
