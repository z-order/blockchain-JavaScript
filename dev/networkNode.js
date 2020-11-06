// const express = require('express');
// var app = express();

// // '/' root
// app.get('/',function(req,res){
//     res.send('Hello Coding JavaScript!');
// })

// app.listen(3000); //client -> server port 3000에서 대기
const reqp = require('request-promise');
const port = process.argv[2];

const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const Blockchain = require('./Blockchain');
const requestPromise = require('request-promise');
var bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.get -> 모든 정보가 다 보이게
//app.post -> 브라우저 상 실행 불가
app.get('/blockchain',function(req,res){
    res.send(bitcoin);
});

app.post('/transaction',function(req,res){
    // const blockIndex = bitcoin.createNewTransaction(
    //     req.body.amount,
    //     req.body.sender,
    //     req.body.recipient
    // )
    // res.json({note: `Transaction will be added in block ${blockIndex}.`});

    // console.log(req.body); //요청내용을 콘솔에 출력
    // //요청 결과를 문자열로 반환
    // res.send(`The amount of the transaction is ${req.body.amount} bitcoin from ${req.body.sender} to ${req.body.recipient}.`);

    //res.send('It works!!!');

    const newTransaction = req.body;
    const blockIndex =
    bitcoin.addTransactionToPendingTransactions(newTransaction);
    res.json({note: `Transaction will be added in block ${blockIndex}.`});
});

//새로운 블록을 채굴하고 생성
app.get('/mine',function(req,res){
    //unique id 생성
    const {v1:uuid} = require('uuid');
    const nodeAddress = uuid().split('-').join('');

    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const curBlockData = {
        transaction:bitcoin.newTransactions,
        //Index -> error
        index:lastBlock['index']+1
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash, curBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash, curBlockData,nonce);
    const newBlock = bitcoin.createNewBlock(nonce,previousBlockHash, blockHash);

    const requestPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl => {
        const requestOptions = {
            uri: networkNodeUrl + '/receive-new-block',
            method: 'POST',
            body: {newBlock: newBlock},
            json: true
        };
        requestPromises.push(reqp(requestOptions));
    });
    Promise.all(requestPromises) 
    .then(data => {
        const requestOptions = {
            uri: bitcoin.currentNodeUrl + '/transaction/broadcast',
            method: 'POST',
            body: {
                amount: 12.5,
                sender: "00",
                recipient: nodeAddress
            },
            json: true
        };
        return reqp(requestOptions);
    })
    .then(data=>{
        res.json({
            note: `New block mined & broadcast successfully`,
            block: newBlock
        });
    });

    // res.json({note:"New block mined successfully",block:newBlock});

    // bitcoin.createNewTransaction(12.5,"00",nodeAddress);

});

app.post('/receive-new-block', function(req,res){
    const newBlock = req.body.newBlock;
    const lastBlock = bitcoin.getLastBlock();
    const correctHash = lastBlock.hash === newBlock.prevBlockHash; //책이랑 다름
    const correctIndex = lastBlock['index']+1 === newBlock['index'];

    if(correctHash && correctIndex) {
        bitcoin.chain.push(newBlock);
        bitcoin.newTransactions = [];
        res.json({
            note: 'New block received and accepted.',
            newBlock: newBlock
        });
    }
    else {
        res.json({
            note: 'New block rejected.',
            newBlock: newBlock
        });
    }
});

//완전 노드 구축 코드
//새 노드 등록 및 브로드캐스트
app.post(`/register-and-broadcast-node`, function(req, res){
    const newNodeUrl = req.body.newNodeUrl;
    if(bitcoin.networkNodes.indexOf(newNodeUrl) == -1)
        bitcoin.networkNodes.push(newNodeUrl);
    
    const regNodesPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl => {
        const requestOptions = {
            uri: networkNodeUrl + '/register-node',
            method: 'POST',
            body: {newNodeUrl: newNodeUrl},
            //body: {},
            json: true
        };
        regNodesPromises.push(reqp(requestOptions));
    });
    
    Promise.all(regNodesPromises)
    .then(data => {

        const bulkRegisterOptions = {
            uri: newNodeUrl + '/register-nodes-bulk',
            method: 'POST',
            body: {allNetworkNodes: [...bitcoin.networkNodes,bitcoin.currentNodeUrl]},
            json: true
        }
        return requestPromise(bulkRegisterOptions);
    })
    .then(data => {
        res.json({note: 'New Node registered with network successfully'});
    });
});
//새로운 노드를 등록만
app.post(`/register-node`,function(req,res){
    const newNodeUrl = req.body.newNodeUrl; //등록요청 URL
    const nodeNotExist = (bitcoin.networkNodes.indexOf(newNodeUrl) == -1);
    const notCurrentNode = bitcoin.currentNodeUrl !== newNodeUrl;
    if(nodeNotExist && notCurrentNode)
        bitcoin.networkNodes.push(newNodeUrl);
    res.json({note: `New node registered successfully.`});
});
//한번에 여러 노드 등록
app.post(`/register-nodes-bulk`, function(req,res){
    const allNetworkNodes = req.body.allNetworkNodes;
    allNetworkNodes.forEach(networkNodeUrl => {
        const nodeNotAlreadyPresent = bitcoin.networkNodes.indexOf(networkNodeUrl) == -1;
        const notCurrentNode = bitcoin.currentNodeUrl !== networkNodeUrl;        
        if(nodeNotAlreadyPresent && notCurrentNode)
                    bitcoin.networkNodes.push(networkNodeUrl);
    });
    res.json({note: 'Bulk registeration successful.'});
});
// app.listen(3000,function() {
//     console.log('listening on port 3000...');
// });

app.get('/consensus',function(req,res){
    const requestPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl => {
        const requestOptions = {
            uri: networkNodeUrl+'/blockchain',
            method: "GET",
            json: true
        }
        requestPromises.push(reqp(requestOptions));
    });
    Promise.all(requestPromises)
    .then(blockchains => {
        const currentChainLength = bitcoin.chain.length;
        let maxChainLength = currentChainLength;
        let newLongestChain = null;
        let newTransactions = null;
        //더 긴 체인 있는지 확인
        blockchains.forEach(blockchain => {
            if(blockchain.chain.length > maxChainLength) {
                maxChainLength = blockchain.chain.length;
                newLongestChain = blockchain.chain;
                //책 - pdf
                newTransactions = blockchain.newTransactions;
            };
        });

        if(!newLongestChain || (newLongestChain && !bitcoin.chainIsValid(newLongestChain)))
        {
            res.json({note: 'Current chain has not been replaced.',chain: bitcoin.chain})
        }
        else {
            bitcoin.chain = newLongestChain;
            bitcoin.newTransactions = newTransactions;
            res.json({note:"This chain has been replaced.",chain:bitcoin.chain});
        }

        });

    });

app.post('/transaction/broadcast',function(req,res){
    const newTransaction = bitcoin.createNewTransaction(req.body.amount, req.body.sender,req.body.recipient);
    bitcoin.addTransactionToPendingTransactions(newTransaction);
    const requestPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl => {
        const requestOptions = {
            uri: networkNodeUrl + '/transaction',
            method: 'POST',
            body: newTransaction,
            json: true
        };
        requestPromises.push(reqp(requestOptions));
    });
    Promise.all(requestPromises)
    .then(data => {
        res.json({note: "Transaction created and broadcast successfully."})
    });
});
//블록탐색기
app.get('/block/:blockHash', function(req,res) {
    const blockHash = req.params.blockHash;
    const correctBlock = bitcoin.getBlock(blockHash);
    res.json({block: correctBlock});
});

app.get('/transaction/:transactionId', function(req,res) {
    const transactionId = req.params.transactionId;
    const transactionData = bitcoin.getTransaction(transactionId);
    res.json({
        transaction: transactionData.transaction,
        block: transactionData.block
    });
});

app.get('/address/:address', function(req, res) {
    const address = req.params.address;
    const addressData = bitcoin.getAddressData(address);
    res.json({
        addressData: addressData
    });
});

//블록 탐색기 파일 추가
app.get('/block-explorer', function(req, res) {
    res.sendFile('./block-explorer/index.html',{root: __dirname});
});

app.listen(port,function() {
    console.log(`listening on port ${port}...`);
});