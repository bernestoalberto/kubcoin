let HDWalletProvider = require("truffle-hdwallet-provider");

//let mnemonic ="crater close lunar fitness uphold glue morning resemble suspect cigar front roast";
let mnemonic ="room slow toddler allow accuse jelly left portion muscle pigeon post powder";
//let mnemonic ="alter witness issue include brave gasp neither young seminar affair noble skull";
//let account = "0x7311bd9c8e5a3d46f3d36d8e99820682335fb949";


// console.log(providerk);
// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*", // Match any network id
            gas: 4712388,
            gasPrice: 100000000000
        },
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(mnemonic,"https://rinkeby.infura.io/v3/330b3a1f0f99430a85ff5036790cb39c")
            },
            network_id: '4',
            "gas":      6500000,
            "gasPrice": 100000000000
        },
        ropsten: {
          provider: function() {
              return new HDWalletProvider(mnemonic,"https://ropsten.infura.io/v3/330b3a1f0f99430a85ff5036790cb39c")
          },
          network_id: '3',
          "gas":      6500000,
          "gasPrice": 100000000000
      },
  compilers: {
    solc: {
      version: '^0.5.0'
    }
  }
    }
};

