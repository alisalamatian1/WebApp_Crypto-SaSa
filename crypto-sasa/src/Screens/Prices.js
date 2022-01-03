import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";

const Prices = () => {
    console.log("I have ran in prices")
    let pricebit;
    let priceeth;
    const originalUrl = 'https://api.cryptonator.com/api/ticker/btc-usd'
    let url = 'https://api.cryptonator.com/api/ticker/btc-usd'
    let urlEth = "https://api.cryptonator.com/api/ticker/eth-usd"
    let urlStellar = "https://api.cryptonator.com/api/full/xlm-usd"
    let urlRipple = "https://api.cryptonator.com/api/full/xrp-usd"

    const [priceBit, setPriceBit] = useState(0);

    useEffect(() => {
        axios.get(url)
        .then(response => {
          setPriceBit(response.data)
        })
    }, [])


    return (
        <div>
            <p>
                Show me something please!
                {priceBit}
            </p>
        </div>
    )
}

export default Prices

