import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext([]);

export default CartContext

export const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState([]);

    const value = { cartData, setCartData};
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}