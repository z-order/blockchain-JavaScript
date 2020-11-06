const Blockchain = require('./Blockchain');
const bitcoin = new Blockchain();


const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1604558639206,
    "transaction": [],
    "nonce": 100,
    "hash": "0",
    "prevBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1604558644454,
    "transaction": [],
    "nonce": 16441,
    "hash": "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285",
    "prevBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1604558670420,
    "transaction": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "4a3512301f3211eb9e735546a6a9d204",
    "transactionId": "4bc612701f3211eb9e735546a6a9d204"
    },
    {
    "amount": 10,
    "sender": "1",
    "recipient": "John",
    "transactionId": "51be16501f3211eb9e735546a6a9d204"
    },
    {
    "amount": 20,
    "sender": "2",
    "recipient": "John",
    "transactionId": "54b7f5601f3211eb9e735546a6a9d204"
    },
    {
    "amount": 30,
    "sender": "3",
    "recipient": "John",
    "transactionId": "57901ba01f3211eb9e735546a6a9d204"
    }
    ],
    "nonce": 3874,
    "hash": "00000b6453bd6ce3c183e9dfa9dced767d2925bbbaeed895c23f855aaf0fd9ea",
    "prevBlockHash": "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285"
    },
    {
    "index": 4,
    "timestamp": 1604558699081,
    "transaction": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "5af762801f3211eb9e735546a6a9d204",
    "transactionId": "5b399ba01f3211eb9e735546a6a9d204"
    },
    {
    "amount": 40,
    "sender": "4",
    "recipient": "John",
    "transactionId": "6114c8b01f3211eb9e735546a6a9d204"
    },
    {
    "amount": 50,
    "sender": "5",
    "recipient": "John",
    "transactionId": "63a892f01f3211eb9e735546a6a9d204"
    },
    {
    "amount": 60,
    "sender": "6",
    "recipient": "John",
    "transactionId": "66505a601f3211eb9e735546a6a9d204"
    }
    ],
    "nonce": 86794,
    "hash": "0000e9db6c6322d03554559030ac9ba2f526ab867dac5331f1a1be1fc56c30dd",
    "prevBlockHash": "00000b6453bd6ce3c183e9dfa9dced767d2925bbbaeed895c23f855aaf0fd9ea"
    },
    {
    "index": 5,
    "timestamp": 1604558702969,
    "transaction": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "67b9fc801f3211eb9e735546a6a9d204",
    "transactionId": "6c4f63201f3211eb9e735546a6a9d204"
    }
    ],
    "nonce": 21800,
    "hash": "00006350118995412b949136d17e00fadf41671bb1d04ae1d1d98996f7390c87",
    "prevBlockHash": "0000e9db6c6322d03554559030ac9ba2f526ab867dac5331f1a1be1fc56c30dd"
    },
    {
    "index": 6,
    "timestamp": 1604558706450,
    "transaction": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "6d86d1b01f3211eb9e735546a6a9d204",
    "transactionId": "6ea1dea01f3211eb9e735546a6a9d204"
    }
    ],
    "nonce": 22607,
    "hash": "0000a30152dcfb331b04766995546314cbccc558ef45f2e41e3e26b18b9dd968",
    "prevBlockHash": "00006350118995412b949136d17e00fadf41671bb1d04ae1d1d98996f7390c87"
    }
    ],
    "newTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "6f995e001f3211eb9e735546a6a9d204",
    "transactionId": "70b2e4501f3211eb9e735546a6a9d204"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    }

console.log('VALID:', bitcoin.chainIsValid(bc1.chain));