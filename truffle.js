var LedgerWalletProvider = require("truffle-ledger-provider");
var infuraApiKey = process.env.INFURA_APIKEY;

var kovanLedgerOptions = {
    networkId: 42,
    accountsOffset: 0
};

var mainnetLedgerOptions = {
    networkId: 1,
    accountsOffset: 0
};


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    kovan: {
      provider: new LedgerWalletProvider(
        kovanLedgerOptions,
        "https://kovan.infura.io/" + infuraApiKey
      ),
      network_id: kovanLedgerOptions.networkId,
      gas: 1000000,
      gasPrice: 15000000000,
    },
    mainnet: {
      provider: new LedgerWalletProvider(
        mainnetLedgerOptions,
        "https://mainnet.infura.io/" + infuraApiKey
      ),
      network_id: mainnetLedgerOptions.networkId,
      gas: 5700000,
      gasPrice: 21000000000,
    }
  }
};
