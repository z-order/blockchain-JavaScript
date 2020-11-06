const jsObj = [{
    name:'홍길동',
    region:'서울'
},{
    name:'김철수',
    region:'부산'
}];

const outputA = JSON.stringify(jsObj);
const outputB = JSON.stringify(jsObj,null,2);
console.log(typeof(outputA));
console.log('------------------------------');
console.log(outputA);
console.log('------------------------------');
console.log(outputB);
console.log('------------------------------');
const outputC = JSON.parse(outputB)
console.log(typeof(outputC));
console.log(outputC);
console.log('------------------------------');
const outputD = jsObj[0];
console.log(typeof(outputD));
console.log(outputD);
