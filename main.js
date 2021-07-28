const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('c1c9070ea474a93475f1278150be7fc672841820f581a98e76d9489f73fbbc2d');
const myWalletAddress = myKey.getPublic('hex');

let hackmecoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
hackmecoin.addTransaction(tx1);

// hackmecoin.createTransaction(new Transaction('address1', 'address2', 100));
// hackmecoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\nStarting the miner...');
hackmecoin.minePendingTransactions(myWalletAddress);
//hackmecoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of hackme is ', hackmecoin.getBalanceOfAddress(myWalletAddress));