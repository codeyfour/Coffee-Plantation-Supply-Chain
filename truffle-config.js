const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "4e795d03bf8340ab8144de8586248530";

const mnemonic = "spirit supply whale amount human item harsh scare congress discover talent hamster";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
	    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
	
	
	
  },
  compilers: {
     solc: {
       version:"0.5.4" // ex:  "0.4.20". (Default: Truffle's installed solc)
     }
  }
  
};