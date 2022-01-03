import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Prices from "./Screens/Prices"
import Wallet from "./Screens/Wallet"
import Coin from "./context/coins"

ReactDOM.render(
  <React.StrictMode>
    <Prices />
    <Coin.Provider>
    <Wallet />
    </Coin.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



