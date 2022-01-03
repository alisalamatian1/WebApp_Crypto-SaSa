import React from "react";
import coins from "../context/coins"

export const Wallet = () => {
    const coin = useContext(coins);
    return(
    <div>
        <p>
            {coin.name}
            {coin.quantity}
            {coin.priceBought}
        </p>
    </div>
    )
}