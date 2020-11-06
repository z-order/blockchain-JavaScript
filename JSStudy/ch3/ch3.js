// var year = 2020;
// if ( (year %4 == 0 && year%100 != 0) || year%400 == 0)
//     console.log("윤년이다!!!!!!!!!!");
// else
//     console.log("윤년 아니다...");


// var cm = 10;
// if(cm < 0) console.log("잘못 설정되었습니다.")
// else console.log("Inch : %d인치",cm*2.54)

/////////////////////////////////////////////////////////
// let today = new Date();
// let hours = today.getHours();
// if(hours > 12) hours -= 12;
// var daynight = "am";
// var plus = 20;

// if(hours+plus >= 24){
//     console.log("%d am",hours+plus-24)
// }
// else if(hours+plus >= 12)
// {
//     console.log("%d pm",hours+plus-12)
// }
// else {
//     console.log("%d am",hours+plus)
// }

// if(hours+plus > 12 && daynight == "pm")
//     console.log('%d am', hours+plus-12)
// else if(hours+plus > 12 && daynight == "am")
//     console.log('%d pm', hours+plus-12)
// else if(hours+plus == 12 && daynight == "am")
//     console.log('정오')
// else if(hours+plus == 12 && daynight == "pm")
//     console.log('자정')
// else console.log("%d %s",hours+plus,daynight)

// var tmp = hours+plus;
// if(tmp > 12) {
//     tmp -= 12;
//     if(daynight == "pm") daynight = "am";
//     else daynight = "pm";
// }
// console.log(daynight, tmp)
/////////////////////////////////////////////////////////

// var x = 15;
// var y = 4;
// var z = 0;
// x > y ? z=y : z=x;
// while(z > 0){
//     if(x%z == 0 && y%z == 0){
//         if(z == 1) {
//             console.log("doesn't exist")
//             return;
//         }
//         console.log("%d\n",z)
//         return;
//     }
//     else z--;
// }
/////////////////////////////////////////////////////////
// var x = 12
// var y = x
// while(y>0){
//     if(x%y == 0) console.log("%d",y);
//     y--;
// }
/////////////////////////////////////////////////////////
// var n = 30;
// var count = 0;
// for(var i = 2;i<=n;i++)
// {
//     count = 0;
//     for(var j=2;j<i;j++) //연산횟수 줄이기 -> 당연한 루프는 돌 필요 없다.
//     {
//         if(i%j == 0) count++
//     }
//     if(count == 0) console.log("%d",i)
// }
/////////////////////////////////////////////////////////

