function sampleOne() {
    let a = 3; //local variable
    console.log(a);
}

sampleOne();

let x = 9, y = 7; //global variables

if (x>y) {
    let b = 6; //local variable
    console.log(b);
}

console.log(x);
//console.log(a);
//console.log(b);

