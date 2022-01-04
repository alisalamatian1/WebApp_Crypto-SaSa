import React, { useContext, useEffect, useState } from "react";
import coins from "../context/coins"
import Transactions from "../components/Transactions"
import { CoinContext } from "../context/coins"

const Wallet = () => {
    console.log("I have ran in Wallet")
    const [coinInfo, setCoinInfo] = useContext(CoinContext);
    const [records, setRecords] = useState([]);
    return (
        <div>
            <Transactions />
            {console.log("I have ran in Wallet in the div")}
            <p>
                hello
                {useEffect(() => {
                    console.log("I am inside the useEffect in the Wallet")
                    records.push(coinInfo);
                    console.log(coinInfo);
                    return (

                        <p>
                            does not run
                        </p>

                    )
                }, [coinInfo.name, coinInfo.priceBought, coinInfo.quantity])}
                {/* {coinInfo.name}
                {coinInfo.quantity}
                {coinInfo.priceBought} */}

                {
                    records.map((record) => {
                        // console.log("inside the map inside the wallet and records")
                        // console.log(record)
                        return(
                        <p>
                            {record.name}
                            {record.quantity}
                            {record.priceBought}
                       </p>
                       
                        )
                        })
                }
          </p>
        </div>
    )
}
export default Wallet;