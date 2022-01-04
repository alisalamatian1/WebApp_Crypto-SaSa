import React, { useContext, useState, useEffect } from "react";
import coins from "../context/coins"
import Coin from "../context/coins"


const Transactions = () => {
  let { nameG, quantityG, priceBoughtG } = useContext(coins);
  //console.log("I have ran in Pays")
  const [priceBought, setPriceBought] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("");
  const [submitted, setSubmit] = useState(false);
  const coin = useContext(coins);
  useEffect(() => {
    console.log("I am inside the useEffect in the Wallet")   
    nameG = name;
    quantityG = quantity;
    priceBoughtG = priceBought;
  }, [submitted])
  return (
    <Coin.Provider
      value={{
        name: nameG,
        quantity: quantityG,
        priceBought: priceBoughtG,
      }}>

      <div>
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
    </Coin.Provider>
  )
}

export default Transactions;