
//const sha256 = require('sha256');
import {sha256} from 'js-sha256';
hashBlock = function(prevBlockHash, curBlockData, nonce){
    const dataString = prevBlockHash + nonce.toString() + JSON.stringify(curBlockData);
    const hash = sha256(dataString);
    return hash;
}

proofOfWork = function(prevBlockHash, curBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(prevBlockHash,curBlockData,nonce);
    let start = new Date();
    while(hash.substring(0,4) !== '0000'){
        nonce++;
        hash = this.hashBlock(prevBlockHash,curBlockData,nonce);
        
        process.stdout.write('\r'+hash+'\t'+nonce);
    }
    let end = new Date();
    let interval = end.getTime() - start.getTime();
    interval = Math.floor(interval/1000);
    console.log(`실행시간이 총 ${interval}초 입니다.`);
    return nonce;
}





    

