setTimeout(()=>{
    console.log("cake is baked");
    setTimeout(()=>{
        console.log("cake is decorated");
        setTimeout(()=>{
            console.log("cake packed");
            setTimeout(()=>{
                console.log("cake delivered");
            },10000)
        },10000)
    },20000);
},30000);