let ar = [8,4,2,3,6,8]

// ar.forEach(function printElement(e){
//     console.log(e);
// });

//ar.forEach((e)=>console.log(e));

let sum = 0;

// ar.forEach(function addElements(e){
//     sum = sum+e;
// });

ar.forEach(e => sum = sum + e);
console.log(sum);