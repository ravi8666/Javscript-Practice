console.log("preparing soup");
setTimeout(function(){
    console.log("cake is baked")
},10000);
console.log("preparing pasta");  // time : 10.228 seconds

setTimeout(() => console.log("preparing cake"),5000); // arrow function