import React, {useContext} from "react";
import coins from "../context/coins"
import Pays from "../components/Pays"

const Wallet = () => {
    console.log("I have ran in Wallet")
    const coin = useContext(coins);
    return(
    <div>
        <Pays/>
        <p>
            hello
            {coin.name}
            {coin.quantity}
            {coin.priceBought}
        </p>
    </div>
    )
}
export default Wallet;