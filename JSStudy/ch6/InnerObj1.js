// let string1= `SouthKoreaSouthKorea`;
// let string2 = new String(`SouthKorea`);
// let string3 = `대한민국`;
// let string4 = `South korea`;
//console.log(string1.charAt(3));
//console.log(string1.charCodeAt(3));
//console.log(string1.concat(string3));
//console.log(string1.indexOf("Sou",1));
//console.log(string1.replace("South","best"));
//console.log(string1.search("Sou"));
//console.log(string1.slice(2,4));
//console.log(string4.split(" ",2));
//console.log(string1.substr(4,2));
//console.log(string1.substring(4,6));
//console.log(string1.toLowerCase());
//console.log(string1.toUpperCase());


let string5 ="SouthKoreaSouthKoreaSouthKoreaSouthKorea";
let str = "Sou";
var i = 0;
// while(string5.indexOf(str,i) != -1 ) {
//     console.log(string5.indexOf(str,i));
//     i = i + string5.indexOf(str,i);
// }
while(1) {
    var find = string5.indexOf(str,i);
    if(find == -1) break;
    console.log(find);
    i =  find + str.length;
}
