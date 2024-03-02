import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const CartContext = createContext(null);

const CartContextProvider = (props) => {
    const [totalCartItems, setTotalCartItems] = useState(0);
    const config = {
        headers: {
            Authorization: localStorage.getItem("token"),
        }
    };

    useEffect(() => {
        axios
            .get('http://localhost:2000/cart', config)
            .then((res) => {
                console.log(res.data);  // Log the data to check if it's correct
                setTotalCartItems(res.data.data.length);
            })
            .catch((err) => console.log(err));

    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts


    const contextValue = {
        totalCartItems,
        setTotalCartItems
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
