function bakeCake(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("cake baked");
        },30000);
    });
}


function decorateCake(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("cake decorated");
        },20000);
    });
}


function packCake(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("cake packed");
        },10000);
    });
}


function deliverCake(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("cake delivered");
        },10000);
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

processCake();