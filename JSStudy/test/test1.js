var msg='hello world'
console.log(msg)

let msg2="hello JSP"
console.log(msg2)

function hello() {
    document.write(msg2);
}

//1번
function divisor(n) {
    var m = 1
    while(n>=m){
        if(n%m==0) console.log("%d\t",m);
        m++;
    }
}
//divisor(12);
//////////////////////////////////////////////////////
//2번
function dec2bin_int(n) {
    var str="";
    while(n>0){
        if(n == 1) {
            str = n + str;
            break;
        }
        if(n%2 == 0) str = n%2 + str;
        else str = "1"+str;
        n=Math.floor(n/2)
    }
    return str;
}
console.log(dec2bin_int(10));

function dec2bin_float(d) {
    var str = "";
    while(d != 0) {
        d = d*2
        if(d >= 1) {
            str += "1";
            d -= 1;
        }
        else str += "0";
    }
    return str;
}
//console.log(dec2bin_float(0.125));

function desc2bin(num) {
    str1 = ""; 
    str2="";
    var n = Math.floor(num)
    str1=dec2bin_int(n);
    str2=dec2bin_float(num-n);
    return str1+"."+str2;
}

//console.log(desc2bin(10.625))

//////////////////////////////////////////////////////
// function recu(n) {
//     if(n == 0) return 0;
//     return n+recu(n-1);
// }
// console.log(recu(100));