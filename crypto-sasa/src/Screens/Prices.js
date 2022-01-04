import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";

const Prices = () => {
    let pricebit;
    let priceeth;
    const originalUrl = 'https://api.cryptonator.com/api/ticker/btc-usd'
    let url = 'https://api.cryptonator.com/api/ticker/btc-usd'
    let urlEth = "https://api.cryptonator.com/api/ticker/eth-usd"
    let urlStellar = "https://api.cryptonator.com/api/full/xlm-usd"
    let urlRipple = "https://api.cryptonator.com/api/full/xrp-usd"

    const [priceBit, setPriceBit] = useState(0);
    const [priceEth, setPriceEth] = useState(0);
    const [priceStel, setPriceStel] = useState(0);
    const [priceRip, setPriceRip] = useState(0);

    useEffect(() => {
        axios.get(url)
        .then(response => {
          setPriceBit(response.data.ticker.price)
        })
        axios.get(urlEth)
        .then(response => {
          setPriceEth(response.data.ticker.price)
        })
        axios.get(urlStellar)
        .then(response => {
          setPriceStel(response.data.ticker.price)
        })
        axios.get(urlRipple)
        .then(response => {
          setPriceRip(response.data.ticker.price)
        })
    }, [])
    


    return (
        <div>
            <p>
                Prices <br/>
                Bitcoin: {priceBit} <br/>
                Ethereum: {priceEth} <br/>
                Stellar: {priceStel} <br/>
                Ripple: {priceRip} <br/>
            </p>
        </div>
    )
}

export default Prices

