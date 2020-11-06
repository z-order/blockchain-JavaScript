//2
// var mile = 100;
// var km = mile*1.6;
// console.log("%dkm",km);

//1
// var x = 3
// var y = 4
// console.log("%d %d %d %d",x+y, x-y,x*y,x/y)

//3
// var PI = 3.141592
// var r = 4
// console.log("%d %d",2*PI*r,PI*r*r)
/////////////////////////////////////////////////////
//3
// function sum(n) {
//     //var cn = 0
//     n = n*(n+1)/2;
//     return cn;
// }

// var n = 100
// console.log("1~100 sum : %d", sum(n))

//4
// var st = 5
// var gr = 6
// console.log("%d %d", st*113.5, gr*75)

//1
// function ms(n) {
//     var m = parseInt(n/60)
//     n = n - 60*m
//     var s = n
//     console.log("%dm %ds",m,n) 
// }

// ms(200)

//2
// function dhm(n) {
//     var d = 0;
//     var h = 0;
//     var m = 0;
//     if(n >= (60*24)) {
//         d = parseInt(n/(60*24));
//         n = n - d*60*24;
//     }

//     if(n >= 60) {
//         h = parseInt(n/60);
//         n = n - h*60;
//     }

//     m = n;
//     console.log("%d일 %d시간 %d분",d,h,m);
// }

// dhm(1550)
// dhm(100)
// dhm(50)