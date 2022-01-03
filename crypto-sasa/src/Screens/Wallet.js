import React from "react";
import coins from "../context/coins"
import {Pays} from "../components/Pays"

export const Wallet = () => {
    const coin = useContext(coins);
    return(
    <div>
        <Pays/>
        <p>
            {coin.name}
            {coin.quantity}
            {coin.priceBought}
        </p>
    </div>
    )
}