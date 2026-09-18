let ar = [1,5,6,8,7,4,10];

// let ar2 = ar.find(function lessThanSix(e){
//             return e > 6;
// });

let ar2 = ar.find(e => e > 6);
let ar3 = ar.find(e => e > 12);
console.log(ar2);
console.log(ar3);