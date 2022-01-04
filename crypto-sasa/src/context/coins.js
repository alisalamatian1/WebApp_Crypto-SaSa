import React, { useState, createContext } from "react";

export const CoinContext = createContext();

// export const Coin = createContext({
//     name : "nothing",
//     quantity : 0,
//     priceBought : 0,
// });

export const CoinProvider = (props) => {
    const [coinInfo, setCoinInfo] = useState(
        {
            name: "nothing",
            quantity: 0,
            priceBought: 0,
        }
    )
    return (
        <CoinContext.Provider value = {[coinInfo, setCoinInfo]}>
            {props.children}
        </CoinContext.Provider>
    )
}


