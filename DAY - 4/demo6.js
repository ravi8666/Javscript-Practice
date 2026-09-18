/*
const cakePromise = new Promise((resolve)=>{
    setTimeout(()=>{
         resolve("cake baked");
    },30000)
   
});
*/

//cakePromise.then((result) => console.log(result));

function bakeCake() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("cake baked");
        }, 10000);

    });
}

bakeCake().then((result) => console.log(result));

