const Blockcahin = require('./Blockchain');
const bitcoin = new Blockcahin();

bitcoin.createNewBlock(1234,'ABCDEFGHIJK','1234567890');
//여러 개의 트랜잭션 생성
bitcoin.createNewTransaction(100,'JOHN','TOM');
bitcoin.createNewTransaction(50,'TOM','JANE');
bitcoin.createNewTransaction(10,'JANE','JOHN');

bitcoin.createNewBlock(5678,'ABABABABAB','A1A2A3A4A5')
//console.log(bitcoin);
console.log(bitcoin.chain[0]);
console.log(bitcoin.chain[1]);