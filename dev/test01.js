const Blockchain = require(`./Blockchain`);

const bitcoin = new Blockchain();
console.log(bitcoin);

//bitcoin.createNewBlock(1234,'ABCDEFGHIJK','1234567890');
bitcoin.createNewBlock(1234,'ABCDEFGHIJ1','123456789A');
bitcoin.createNewBlock(2234,'ABCDEFGHIJ2','123456789B');
bitcoin.createNewBlock(3234,'ABCDEFGHIJ3','123456789C');
console.log(bitcoin);