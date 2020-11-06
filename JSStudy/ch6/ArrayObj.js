// let arr = [{
//     name:`수박`,
//     price:10000
// },{
//     name:`포도`,
//     price:2000
// },{
//     name:`사과`,
//     price:1000
// },{
//     name:`딸기`,
//     price:1500
// }];

// let poped = arr.pop();
// //console.log(poped);
// console.log(arr);

// arr.push(poped);
// console.log(arr);

// arr.push({name:`망고`,price:3000});
// console.log(arr);

// let arrayA = [100,20,30,10];

// arrayA.sort(); //배열 정렬 -> 문자열로 정렬
// console.log(arrayA);

// //터미널에선 잘 돌아가는데 디버그 콘솔에선 결과가 안 나옴

// arrayA.sort(function(a,b) {
//     return a-b;
// });
// console.log(arrayA);
//////////////////////////////////////////////////
let arrayB = [{
    name:`수박`,
    price:10000
},{
    name:`포도`,
    price:2000
},{
    name:`사과`,
    price:1000
},{
    name:`딸기`,
    price:1500
},{
    name:`멜론`,
    price:2000
}];

arrayB.sort((a,b)=> {
    let t = b.price - a.price;
    if(t == 0) {
        if(a.name < b.name) return -1;
        else if(a.name>b.name) return 1;
        else return 0;
    }
    else return t
});
console.log(arrayB);

// arrayB.sort((a,b)=>{
//     if(a.name < b.name) return -1;
//     else if(a.name>b.name) return 1;
//     else return 0;
// });
// console.log(arrayB);

// arrayC =  [{
//     "name":"수박",
//     "price":10000,
//     "hasA":true
// },{
//     "name":`포도`,
//     "price":10000,
//     "hasA":false
// }];

// console.log(arrayC[1].name)
// console.log(arrayC[1]["name"])

