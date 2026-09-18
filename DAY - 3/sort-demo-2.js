let ar = [{
    name: "arun",
    exp: 19
},
{
    name: "varun",
    exp: 15
},
{
    name: "tharun",
    exp: 6
},
{
    name: "kishore",
    exp: 4
},
{
    name: "ravi",
    exp: 2
},
]

//let ar2 = ar.sort((a,b) => a.name.localeCompare(b.name));
//let ar3 = ar.sort((a,b) => a.name.localeCompare(b.name)).reverse();
//console.log(ar2);

// let ar2 = ar.sort((a,b) => a.exp-b.exp);
let ar2 = ar.sort((a,b) => a.exp-b.exp).reverse();
console.log(ar2);