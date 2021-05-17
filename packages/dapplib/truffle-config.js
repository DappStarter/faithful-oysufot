require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember upset inflict private orange trust'; 
let testAccounts = [
"0xeac886d6bd93d151e766fe90bb9a9ec0f5e2f1b908b443c47d249627b0d0f329",
"0x242119bc6254857cbe9f0c1809930d932cc37627dcfcb15ebb27035735036d37",
"0xcb98133c75789727934fe022f7fa77c69445a7c56a8aee43ff86c4b6afb07764",
"0xea3a25766285b0d2b2899fd28a4ba47a6692f2e22c8933d5c8c441f037380cf5",
"0xe7c0aee8511b64f53f37dcdb596705ae750cf29599f3c2583502a4fd17983e52",
"0x6abf68fe40632e1bc2323eb2cdb6321311d81b7b34dd7ec75446907701035c8c",
"0x845ac910855d787cebeae4acef4f6eacb9e72b42ac80b70642e3657f22c5652f",
"0x0ee8ba338db641fd68f33d11678caad8fac0847b16d5fa37fd43fe7c4efe2545",
"0x5963e4006009a25924395450566b33d4387778bba96f4e84badb56ff83709cd7",
"0x5c7609c9550911905e2218e546a4f93e9343f0f648f9956a0263d8df3fb1d3a2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
