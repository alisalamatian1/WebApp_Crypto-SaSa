import React, { useContext, useState, useEffect } from "react";
import coins from "../context/coins"
import {CoinContext} from "../context/coins"


const Transactions = () => {
  //console.log("I have ran in Pays")
  const [priceBought, setPriceBought] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("");
  const [submitted, setSubmit] = useState(false);
  const [coinInfo, setCoinInfo] = useContext(CoinContext);
  useEffect(() => {
    console.log("I am inside the useEffect in the Wallet")   
    setCoinInfo(
      {
        name: name,
        quantity: quantity,
        priceBought: priceBought,
      }
    )
  }, [submitted])
  return (
      <div>
        <p>
          Here is your transactions:
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          placeholder="Bitcoin, Ethereum"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value)
          }}
        />
        <input
          type="number"
          value={priceBought}
          onChange={(e) => {
            setPriceBought(e.target.value)
          }}
        />
        <button onClick={
          (e) => {
            setSubmit(!submitted)
          }
        }>Submit</button>
      </div>
  )
}

export default Transactions;