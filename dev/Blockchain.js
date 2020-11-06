// class Blockchain {
//     constructor() {
//         this.chain = [];
//         this.newTransactions=[];
//     }
// }
const {v1:uuid} = require('uuid');
const currentNodeUrl = process.argv[3];
function Blockchain() { //Bitcoin system 자체
    //채굴한 모든 블록 이 배열 안 체인으로 저장
    this.chain = [];
    this.newTransactions = []; //처리되지 않은 거래 JSON 객체들의 배열
    
    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];
    //this.createNewBlock();
    this.createNewBlock(100,'0','0');
}

Blockchain.prototype.createNewBlock=function(nonce,prevBlockHash,hash) {
    //JSON 객체, Blockchain 안의 시로운 블록
    const newBlock = {
        index : this.chain.length + 1,
        timestamp : Date.now(),
        transaction : this.newTransactions,
        nonce : nonce,
        hash : hash,
        prevBlockHash : prevBlockHash //마지막은 , 찍어도 돼고 안해도 돼고
    };
    this.newTransactions=[];
    this.chain.push(newBlock);
    return newBlock;
}

Blockchain.prototype.getLastBlock = function() {
    //체인 배열에서 제일 마지막 블록을 반환
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function(amount,sender,recipient) {
    const newTransaction = {
        amount : amount, //송금 양
        sender : sender, //발송인 주소
        recipient : recipient, //수신인 주소
        transactionId: uuid().split('-').join('')
    };
    // this.newTransactions.push(newTransaction);
    // //return this.getLastBlock()['index']+1;
    return newTransaction;
}

Blockchain.prototype.addTransactionToPendingTransactions = function(transactionObj){
    this.newTransactions.push(transactionObj);
    return this.getLastBlock()['index']+1;
}

const sha256 = require('sha256');
Blockchain.prototype.hashBlock = function(prevBlockHash, curBlockData, nonce){
    //console.log("hashBlock:",prevBlockHash, curBlockData, nonce);
    const dataString = prevBlockHash + nonce.toString() + JSON.stringify(curBlockData);
    //console.log("Test:",nonce.toString() ,JSON.stringify(curBlockData));
   // console.log("dataString:",dataString);
    const hash = sha256(dataString);
    //console.log("hash:",hash);
    return hash;
}

Blockchain.prototype.proofOfWork = function(prevBlockHash, curBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(prevBlockHash,curBlockData,nonce);

    //console.log("proofOfwork:",prevBlockHash,curBlockData,nonce);
    
    let start = new Date();
    while(hash.substring(0,3) !== '000'){
        nonce++;
        hash = this.hashBlock(prevBlockHash,curBlockData,nonce);
        
        //console.log(hash);
        process.stdout.write('\r'+hash+'\t'+nonce);
    }
    let end = new Date();
    let interval = end.getTime() - start.getTime();
    interval = Math.floor(interval/1000);
    console.log(`실행시간이 총 ${interval}초 입니다.`);
    return nonce;
}

Blockchain.prototype.chainIsValid = function(blockchain) {
    let validChain = true;
    for (var i = 1;i<blockchain.length;i++){
        //console.log(blockchain[i]);
        const currentBlock = blockchain[i];
        const prevBlock = blockchain[i-1];
        const blockHash = this.hashBlock(prevBlock['hash'],{
            transaction: currentBlock['transaction'],index:currentBlock['index']}, currentBlock['nonce']);

            //console.log(prevBlock['hash']);
           // console.log({transaction: currentBlock['transaction'],index:currentBlock['index']});
            //console.log(currentBlock['nonce']);

        if(blockHash.substring(0,3) !== '000'){
            validChain = false;
            //console.log("false1",blockHash);
        }
            
        if(currentBlock['prevBlockHash'] !== prevBlock['hash'])
        {
            validChain = false;
            //console.log("false2");
        }
            
        console.log('previousBlockHash =>', prevBlock['hash']);
        console.log('currentBlockHash =>', currentBlock['hash']);
    };
    
    const genesisBlock = blockchain[0];
    const correctNonce = genesisBlock['nonce'] === 100;
    //책과 다름
    const correctPreviousBlockHash = genesisBlock['prevBlockHash'] === '0';
    const correctHash = genesisBlock['hash'] === '0';
    const correctTransactions = genesisBlock['transaction'].length === 0;

    if(!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions)
    {
        //console.log(correctNonce,correctPreviousBlockHash,correctHash,correctTransactions);
        validChain = false;
    }

    return validChain;
};

//특정 블록해시값을 가진 블록을 검색
Blockchain.prototype.getBlock = function(blockHash) {
    let correctBlock = null;
    this.chain.forEach(block => {
        if(block.hash === blockHash) correctBlock = block;
    });
    return correctBlock;
}

Blockchain.prototype.getTransaction = function(transactionId) {
    let correctTransaction = null;
    let correctBlock = null;
    this.chain.forEach(block => {
        //책이랑 다름 transactions 
        block.transaction.forEach(transaction => {
            if(transaction.transactionId === transactionId) {
                correctTransaction = transaction;
                correctBlock = block;
            };
        });
    });
    return {transaction: correctTransaction,
            block: correctBlock
        };
}

//특정 주소에 대한 데이터
Blockchain.prototype.getAddressData = function(address) {
    let balance = 0;
    const addressTransactions = [];
    this.chain.forEach(block => {
        block.transaction.forEach(transaction => {
            if(transaction.sender === address) {
 //               balance -= transaction.amount;
                addressTransactions.push(transaction);
            }
            else if(transaction.recipient === address) {
 //               balance += transaction.amount;
                addressTransactions.push(transaction);
            }
        });
    });

//
    addressTransactions.forEach(transaction => {
        if(transaction.recipient === address) {
            balance += transaction.amount;
            //console.log("R:",transaction.amount);
        }
        else if(transaction.sender === address) 
        {
            balance -= transaction.amount;
            //console.log("S:",transaction.amount);
        }
    });
    return {
        addressTransactions: addressTransactions,
        addressBalance: balance
    };
};

module.exports = Blockchain;



    

