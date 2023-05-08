import React, { useContext, createContext, useState } from "react";
const Context = createContext();
export const StateContext = ({ children }) => {
    const [qty, setQty] = useState(0);
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    };
    const decQty = () => {
        if (qty <= 1) return;
        setQty((prevQty) => prevQty - 1);
    };
    return (
        <Context.Provider value={{ incQty, qty, decQty }}>
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
