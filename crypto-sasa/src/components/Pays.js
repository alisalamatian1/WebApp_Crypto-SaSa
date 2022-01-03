import React, {useContext, useState, useEffect} from "react";
import coins from "../context/coins"


const Pays = ()=> {
    const [priceBought, setPriceBought] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [name, setName] = useState("Bitcoin");
    const coin = useContext(coins);
    console.log("is it running!!")
    useEffect(() => {
        coin.name = name;
        coin.quantity = quantity;
        coin.priceBought = priceBought;
    }, [name, quantity, priceBought])
    return (
        <div>
            <input
            type="text"
            value={name}
            onChange={setName}
          />
          <input
            type="number"
            value={quantity}
            onChange={setQuantity}
          />
          <input
            type="number"
            value={priceBought}
            onChange={setPriceBought}
          />          
        </div>
    )
}

export default Pays;