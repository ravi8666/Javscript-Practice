let ar = [{ name: "arun", exp: 19 },
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

// let ar2 = ar.filter(function lessExp(e){
//             return e.exp < 5;
// });

let ar2 = ar.filter(e => e.exp < 5);

console.log(ar2);