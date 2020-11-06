// //json 파일
// let person = {
//     name: `홍길동`,
//     birth: `2000-10-10`,
//     sex:`남자`,
//     nation:`대한민국`
// };


let person = {
    number:100,
    name: `홍길동`,
    male:true,
    array:[10,20,30,40,50],
    print: function() {
        console.log(`${this.number}번 ${this.name}입니다.`)
    }
};
//var myfunc = function() {} -> myfunc: function() {]}

//console.log(person[`name`]);
// for(let key in person) { //object -> person
//     console.log(`${key}:${person[key]}`);
// }

//클래스 밖에서 함수 선언 가능
//c++ 선언이 있고 밖에 정의
//js는 밖에서 선언+정의 가능
//프로토, 프로토타입

//객체.prototype.생성하고자 하는 함수