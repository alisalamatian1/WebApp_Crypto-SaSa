import React, { useContext, useEffect } from "react";
import coins from "../context/coins"
import Transactions from "../components/Transactions"

const Wallet = () => {
    console.log("I have ran in Wallet")
    console.log(coins)
    //const coin = useContext(coins);
    return (
        <div>
            <Transactions />
            {console.log("I have ran in Wallet in the div")}
            <p>
                hello
                {useEffect(() => {
                    console.log("I am inside the useEffect in the Wallet")
                    console.log(coins)
                    return (
                        <div>
                            <p>
                                {coins.name}
                                {coins.quantity}
                                {coins.priceBought}
                            </p>
                        </div>
                    )
                }, [coins.name, coins.priceBought, coins.quantity])}
                {/* {coins.name}
                {coins.quantity}
                {coins.priceBought} */}

            </p>
        </div>
    )
}
export default Wallet;