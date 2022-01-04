import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Prices from "./Screens/Prices"
import Wallet from "./Screens/Wallet"
import { CoinProvider } from "./context/coins"

ReactDOM.render(
  <React.StrictMode>
    <CoinProvider>
      <Prices />
      <Wallet />
    </CoinProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



