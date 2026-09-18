//normal function vs arrow function

const sum = (a,b) => a+b;
console.log(sum(5,4));

/*
function addTwoNumbers(a,b) {
    let c = a+b;
    return c;
}
console.log(addTwoNumbers(10,20));
*/

const addTwoNumbers = (a,b) => {
    let c = a+b;
    return c;
}

console.log(addTwoNumbers(10,10));

/*
function printName(name) {
    console.log(name);
}

printName("Ravi Teja");
*/

const printName = (name) => console.log(name)
printName("Raj Kumar");



