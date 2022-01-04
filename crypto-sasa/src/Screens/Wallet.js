import React, {useContext} from "react";
import coins from "../context/coins"
import Transactions from "../components/Transactions"

const Wallet = () => {
    console.log("I have ran in Wallet")
    const coin = useContext(coins);
    return(
    <div>
        <Transactions/>
        {console.log("I have ran in Wallet in the div")}
        <p>
            hello
            {/* {coin.name}
            {coin.quantity}
            {coin.priceBought} */}
        </p>
    </div>
    )
}
export default Wallet;