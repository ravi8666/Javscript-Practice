//let ar = [4,3,6,8];

//map - it will create a new array

// let ar2 = ar.map(function doubleNumber(e){
//     return e*2;
// })

// let ar3 = ar.map((e) => e*2);

// console.log(ar2);
// console.log(ar3);

let ar = [{
    id: 1,
    name: "arun"
},
{
    id: 2,
    name: "varun"
},
{
    id: 3,
    name: "tharun"

}]


// let ar2 = ar.map(function getNames(e){
//     return e.name;
// });

let ar2 = ar.map(e => e.name);

console.log(ar2);

