function bakeCake(){
  return new Promise((resolve)=>{
  
   setTimeout(() => {
     resolve("Cake baked");
   }, 30000);
   
});
}

function decorateCake() {

  return new Promise((resolve) => {

    setTimeout(() => {

     resolve("Cake decorated");

    }, 20000);

  });

}

function packCake() {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve("Cake packed");

    }, 10000);

  });

}

function deliverCake() {

  return new Promise((resolve) => {

    setTimeout(() => {

    resolve("Cake delivered");

    }, 10000);

  });

}

async function processCake(){
   const a = await bakeCake();
   console.log(a);
   const b = await decorateCake();
   console.log(b);
   const c = await packCake();
   console.log(c);
   const d = await deliverCake();
   console.log(d);
}

function sayHi(){
    console.log("Hi")
}

processCake();
sayHi();

