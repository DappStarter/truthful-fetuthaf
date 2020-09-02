require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain smile inner produce borrow section'; 
let testAccounts = [
"0xbe257bbd20a096a9e5ed854d8a905bfd463cf3467ceaaa2c473894983f81766a",
"0xaa345e86916e071bfa401e5f27886940695a07bbf04723ee4509278f5d846e3f",
"0xaa87e02b452208136b97ffa322aa6c84ed1ba82e8745bd3470c8a59b07e7811b",
"0x31f1cf37123487aafc55a1b22e675e7df2dd2d006505adeb575eb61fd0188244",
"0xa14e3e8885908ba8ac66afb129f72bd2a367ad726b8719e9100886da5126400c",
"0xf17a28114346badf04ba08756030ff01c89386b9a11a9b7d3da51b2ef69b44ee",
"0x4b4da90d7d7d532cdd9f1b6f98a976860a871d364dd9d57b550d21565b0b6340",
"0xa7e9a92bcf8c0bd4d7de61b919281c522d82c188533f49bad27c9fbc4e818d56",
"0x4f3a9af2d09f43fba306cf512f3f5ed34e109a20276c45f7c7f70a45f54e2454",
"0x63aad65095161a393b78ae2d9e21e8c3ddc46e2327e4be1dd7ce19ca6860eb1f"
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
