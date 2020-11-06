let dateA = new Date();
//console.log(dateA);
//console.log(dateA.getFullYear());
//console.log(dateA.getMonth());
//console.log(dateA.getDate());
//console.log(dateA.getDay());
//console.log(dateA.getHours());
//console.log(dateA.getMinutes());
//console.log(dateA.getSeconds());
//console.log(dateA.getMilliseconds());
//console.log(dateA.getTime());

//let dateB = new Date(1603865817803);
//console.log(dateB);

//let dateC = new Date("December 9, 1991, 21:30:00");
//console.log(dateC);

//let dateD = new Date(1991,12-1, 9, 21, 30, 0, 0);
//console.log(dateD);

///////////////////////////////////////////////////////////
// let date = new Date();

// console.log(date);

// date.setFullYear(date.getFullYear()+1);
// date.setMonth(date.getMonth()+11);
// date.setDate(date.getDate()+5);

// console.log(date);
///////////////////////////////////////////////////////////
// let cur = new Date();
// let old = new Date(`April 19, 2000`);

// let interval = cur.getTime() - old.getTime();

// let div = 1000*60*60*24;
// interval = Math.floor(interval/div);

// console.log(`출생 후 ${interval}일 지났습니다.`);

function timetest() {
    let start = new Date();
    for(i = 0;i<100;i++)
    {
        for(j=0;j<200;j++)
        {
            console.log(i,j);
        }
    }
    let end = new Date();
    let interval = end.getTime() - start.getTime();

    //let div = 1000;
    interval = Math.floor(interval/1000);

    console.log(`실행시간이 총 ${interval}초 입니다.`);
}

timetest();