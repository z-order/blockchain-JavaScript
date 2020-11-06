function Property(name,price,nation) {
    this.name = name;
    this.price = price;
    this.nation = nation;
    this.print1 = function() {
        console.log(`1: ${this.name}, ${this.price}, ${this.nation}`)
    }
    // print: function() {
    //     console.log(`name`)
    // }
}

//{} -> 이것도 객체

let property = [
    // new Property(`갤럭시`,100,`Korea`),
    // new Property(`아이폰`,101,`Us`),
    // new Property(`엑스페리아`,102,`Japen`),
    // new Property(`화웨이`,103,`China`)
];

//property.print1(); //함수가 아니다?
Property.prototype.print2 = function() {
    console.log(`2: ${this.name}, ${this.price}, ${this.nation}`);
}
//property.print2(); //함수가 아니다?

// for(let properties of property) { //Property is not iterable
//     properties.print1();
//     properties.print2();
// }
//property[0].print1();

// property.push(new Property(`테블릿`,104,`Uk`));
// property[4].print1();
// property.pop();
// property[4].print1();


// var i = 0;
// //let p = []
// var name = [`갤럭시`,`아이폰`];
// var price =[100,101];
// var nation = [`Korea`,`Us`];

// for(let n of name) {
//     property.push(new Property(n,price[i],nation[i]));
//     i++;
//     //properties.print1();
// }
// property[0].print1();
// property[1].print1();
