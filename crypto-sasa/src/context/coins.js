import React from "react";

const Coin = React.createContext({
    name : "",
    quantity : 0,
    priceBought : 0,
});

// const Bitcoin = React.createContext({
//     quantity = 0,
//     priceBought = 0,
// });

// const Ethereum = React.createContext({
//     quantity = 0,
//     priceBought = 0,
// });

// const Stellar = React.createContext({
//     quantity = 0,
//     priceBought = 0,
// });

// const Ripple = React.createContext({
//     quantity = 0,
//     priceBought = 0,
// });

export default Coin
// export default Ethereum
// export default Stellar
// export default Ripple
