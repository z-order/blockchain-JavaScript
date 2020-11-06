// const express = require('express');
// var app = express();

// // '/' root
// app.get('/',function(req,res){
//     res.send('Hello Coding JavaScript!');
// })

// app.listen(3000); //client -> server port 3000에서 대기

const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const Blockchain = require('./Blockchain');
var bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.get -> 모든 정보가 다 보이게
//app.post -> 브라우저 상 실행 불가
app.get('/blockchain',function(req,res){
    res.send(bitcoin);
});

app.post('/transaction',function(req,res){
    const blockIndex = bitcoin.createNewTransaction(
        req.body.amount,
        req.body.sender,
        req.body.recipient
    )
    res.json({note: `Transaction will be added in block ${blockIndex}.`});

    // console.log(req.body); //요청내용을 콘솔에 출력
    // //요청 결과를 문자열로 반환
    // res.send(`The amount of the transaction is ${req.body.amount} bitcoin from ${req.body.sender} to ${req.body.recipient}.`);

    //res.send('It works!!!');
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
        Index:lastBlock['Index']+1
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash, curBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash, curBlockData,nonce);
    const newBlock = bitcoin.createNewBlock(nonce,previousBlockHash, blockHash);

    res.json({note:"New block mined successfully",block:newBlock});

    bitcoin.createNewTransaction(12.5,"00",nodeAddress);

});

app.listen(3000,function() {
    console.log('listening on port 3000...');
});